import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnaTableroComponent } from './columna-tablero.component';
import {
  Duracion,
  EstadoActividad,
  IActividad,
  Prioridad,
} from '../public-api';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const mockName: string = 'en progreso';
const mockActividades: IActividad[] = [
  {
    id: 1,
    titulo: 'Inducción a la empresa',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion:
      'Día de inducción a la empresa. Es necesario asistir presencialmente a las oficinas.',
    objetivos:
      'Procurar que el empleado pueda asociarse con los valores de la empresa',
    prioridad: Prioridad.High,
    responsable: 'Miguel Perez',
    duracion: 8,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Abierta,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 2,
    titulo: 'Curso de Evolution',
    tipo: 'Capacitación',
    fase: 'La primera semana',
    descripcion:
      'Curso de una semana para el aprendizaje básico del sistema Evolution.',
    objetivos:
      'El participante debe llegar a familiarizarse con todos los módulos de Evolution.',
    prioridad: Prioridad.Medium,
    responsable: 'Ricardo Hernandez',
    duracion: 5,
    tipoDuracion: Duracion.Dias,
    realizaEvaluacion: true,
    status: EstadoActividad.EnProgreso,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 3,
    titulo: 'Visita Guiada',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion: 'Realizar una visita guiada sobre las instalaciones.',
    objetivos: 'Asignar parqueo y conocer el edificio.',
    prioridad: Prioridad.Low,
    responsable: 'Hugo Maldonado',
    duracion: 2,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.EnProgreso,
    fechaFin: new Date(2024, 7, 20),
  },
];

describe('ColumnaTableroComponent', () => {
  let component: ColumnaTableroComponent;
  let fixture: ComponentFixture<ColumnaTableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnaTableroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColumnaTableroComponent);
    component = fixture.componentInstance;
    component.name = mockName;
    component.actividades = mockActividades;
    fixture.detectChanges();
  });

  it('should render all activity cards', () => {
    const colEl: HTMLElement = fixture.nativeElement;
    const cartasActividad = colEl.querySelectorAll('evo-carta-actividad');
    expect(cartasActividad.length).toEqual(mockActividades.length);
  });

  it('should call drop method when changed of order/list', () => {
    const spyOnDragDrop = spyOn(component, 'drop');

    // Get the first activity card
    const colDeb: DebugElement = fixture.debugElement;
    const cartaActividad: HTMLElement = colDeb.query(
      By.css('.cdk-drag'),
    ).nativeElement;

    // Get the column by id
    const col = colDeb.query(By.css('#board-activity-column'));

    // Mock the event cdkDropListDropped of the column
    const mockEvent = {
      previousIndex: 0,
      currentIndex: 1,
      container: {
        data: {},
        element: {
          nativeElement: cartaActividad,
        },
      },
      item: {
        data: {},
      },
    };
    col.triggerEventHandler('cdkDropListDropped', mockEvent);

    // Was the method "drop" called?
    fixture.detectChanges();
    expect(spyOnDragDrop).toHaveBeenCalled();
  });
});
