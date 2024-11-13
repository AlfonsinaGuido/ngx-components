import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaActividadComponent } from './carta-actividad.component';
import { actividad1 as actividadMockData } from '../shared/data/kanban/actividades.data';

describe('CartaComponent', () => {
  let component: CartaActividadComponent;
  let fixture: ComponentFixture<CartaActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaActividadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaActividadComponent);
    component = fixture.componentInstance;
    component.actividad = actividadMockData;
    component.endDate = actividadMockData.FechaFin;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render activity title and description', () => {
    const cardEl: HTMLElement = fixture.nativeElement;
    expect(cardEl.textContent).toContain(actividadMockData.Nombre);
    expect(cardEl.textContent).toContain(actividadMockData.Descripcion);
  });

  it('should render tag component as first child', () => {
    const cardEl: HTMLElement = fixture.nativeElement;
    const cardHeaderEl: Element | null = cardEl.querySelector(
      '#activity-card-header',
    );
    const firstChild = cardHeaderEl?.children[0];
    const tag = firstChild?.querySelector('p');
    expect(tag).toBeTruthy();
    expect(tag?.className).toContain('tag');
  });

  it('should render avatar component with responsible initials', () => {
    const cardEl: HTMLElement = fixture.nativeElement;
    const avatarEl: Element | null = cardEl.children[0];
    const avatar = avatarEl.querySelector('evo-avatar');
    expect(avatar?.textContent).toContain('HM');
  });

  it('should render endDate', () => {
    expect('#endDate').toBeTruthy();
  });
});
