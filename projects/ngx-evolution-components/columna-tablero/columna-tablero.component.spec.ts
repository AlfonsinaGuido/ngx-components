import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnaTableroComponent } from './columna-tablero.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { actividades as mockActividades } from '../shared/data/kanban/actividades.data';

describe('ColumnaTableroComponent', () => {
  let component: ColumnaTableroComponent;
  let fixture: ComponentFixture<ColumnaTableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnaTableroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColumnaTableroComponent);
    component = fixture.componentInstance;
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
