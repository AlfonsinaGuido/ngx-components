import {
  ComponentFixture,
  DeferBlockBehavior,
  DeferBlockState,
  TestBed,
} from '@angular/core/testing';
import { TableroKanbanComponent } from './tablero-kanban.component';
import {
  Duracion,
  EstadoActividad,
  IActividad,
  IColumna,
  Prioridad,
} from '../public-api';

const actividades: IActividad[] = [
  {
    id: 1,
    titulo: 'Inducción a la empresa',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion:
      'Día de inducción a la empresa. Es necesario asistir presencialmente.',
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
    status: EstadoActividad.Cerrada,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 4,
    titulo: 'Revisión de documentos',
    tipo: 'Revisión',
    fase: 'La primera semana',
    descripcion: 'Revisión de documentos y firma de contrato.',
    objetivos: 'Asegurar que todos los documentos estén en orden.',
    prioridad: Prioridad.High,
    responsable: 'Miguel Perez',
    duracion: 2,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Abierta,
    fechaFin: new Date(2024, 7, 20),
  },
];
const columnas: IColumna[] = [
  {
    id: 1,
    nombre: 'abiertas',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.Abierta,
    ),
  },
  {
    id: 2,
    nombre: 'en progreso',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.EnProgreso,
    ),
  },
  {
    id: 3,
    nombre: 'finalizadas',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.Cerrada,
    ),
  },
];

describe('TableroKanbanComponent', () => {
  let component: TableroKanbanComponent;
  let fixture: ComponentFixture<TableroKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableroKanbanComponent],
      deferBlockBehavior: DeferBlockBehavior.Manual,
    }).compileComponents();

    fixture = TestBed.createComponent(TableroKanbanComponent);
    component = fixture.componentInstance;
    component.columnas = columnas;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render skeleton loader', async () => {
    const fixture = TestBed.createComponent(TableroKanbanComponent);
    const component = fixture.componentInstance;
    component.columnas = columnas;
    fixture.detectChanges();

    // Retrieve the list of all defer block fixtures and get the first block.
    const deferBlockFixture = (await fixture.getDeferBlocks())[0];
    await deferBlockFixture.render(DeferBlockState.Loading);

    const colEl: HTMLElement = fixture.nativeElement;
    const columnasEl = colEl.querySelectorAll('#loading-board-column');
    expect(columnasEl.length).toEqual(3);
  });

  it('should render the title of the column', async () => {
    const fixture = TestBed.createComponent(TableroKanbanComponent);
    const component = fixture.componentInstance;
    component.columnas = columnas;
    fixture.detectChanges();

    // Retrieve the list of all defer block fixtures and get the first block.
    const deferBlockFixture = (await fixture.getDeferBlocks())[0];
    await deferBlockFixture.render(DeferBlockState.Complete);

    const colEl: HTMLElement = fixture.nativeElement;
    const columnasEl = colEl.querySelectorAll('#board-column');

    columnasEl.forEach((columna, index) => {
      const titleEl = columna.querySelector('#column-title');
      expect(titleEl?.textContent).toEqual(columnas[index].nombre);
    });
  });

  it('should render the amount of columns in the array', async () => {
    const fixture = TestBed.createComponent(TableroKanbanComponent);
    const component = fixture.componentInstance;
    component.columnas = columnas;
    fixture.detectChanges();

    // Retrieve the list of all defer block fixtures and get the first block.
    const deferBlockFixture = (await fixture.getDeferBlocks())[0];
    await deferBlockFixture.render(DeferBlockState.Complete);

    const colEl: HTMLElement = fixture.nativeElement;
    const columnasEl = colEl.querySelectorAll('#board-column');
    expect(columnasEl.length).toEqual(columnas.length);
  });
});
