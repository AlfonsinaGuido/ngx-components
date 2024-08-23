import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  IActividad,
  Prioridad,
  Duracion,
  EstadoActividad,
} from '../public-api';
import { CartaActividadComponent } from './carta-actividad.component';

const actividadMockData: IActividad = {
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
  fechaFin: new Date('08/20/2024'),
};

describe('CartaComponent', () => {
  let component: CartaActividadComponent;
  let fixture: ComponentFixture<CartaActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaActividadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaActividadComponent);
    component = fixture.componentInstance;
    component.title = actividadMockData.titulo;
    component.description = actividadMockData.descripcion!;
    component.priority = actividadMockData.prioridad;
    component.responsible = actividadMockData.responsable;
    component.endDate = actividadMockData.fechaFin;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render activity title and description', () => {
    const cardEl: HTMLElement = fixture.nativeElement;
    expect(cardEl.textContent).toContain(actividadMockData.titulo);
    expect(cardEl.textContent).toContain(actividadMockData.descripcion);
  });

  it('should render tag component as first child', () => {
    const cardEl: HTMLElement = fixture.nativeElement;
    const tagEl: Element | null = cardEl.children[0];
    const tag = tagEl.querySelector('p');
    expect(tag).toBeTruthy();
    const tagClass = tag?.className;
    expect(tagClass).toContain(actividadMockData.prioridad);
  });

  it('should render avatar component with responsible initials', () => {
    const cardEl: HTMLElement = fixture.nativeElement;
    const avatarEl: Element | null = cardEl.children[0];
    const avatar = avatarEl.querySelector('evo-avatar');
    expect(avatar?.textContent).toContain('MP');
  });

  it('should render endDate', () => {
    expect('#endDate').toBeTruthy();
  });
});
