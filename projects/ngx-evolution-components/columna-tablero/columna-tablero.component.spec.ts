import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnaTableroComponent } from './columna-tablero.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  actividad1,
  actividad2,
  actividades as mockActividades,
} from '../shared/data/kanban/actividades.data';
import { EstadoActividad, IActividad } from '../public-api';
import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

describe('ColumnaTableroComponent', () => {
  let component: ColumnaTableroComponent;
  let fixture: ComponentFixture<ColumnaTableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnaTableroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColumnaTableroComponent);
    component = fixture.componentInstance;
    component.activities = mockActividades;
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

  it('should return true when validacion.action returns true', () => {
    component.validation = {
      action: jasmine.createSpy('actionSpy').and.returnValue(true),
      estado: EstadoActividad.Pendiente,
    };

    const mockActividad: IActividad = actividad1; // Replace with your actual IActividad structure
    const mockCdkDrag: CdkDrag<IActividad> = {
      data: mockActividad,
    } as CdkDrag<IActividad>;

    const result = component.validationCDK(mockCdkDrag);

    expect(component.validation.action).toHaveBeenCalledWith(
      mockActividad,
      EstadoActividad.Pendiente,
    );
    expect(result).toBe(true);
  });

  it('should return false when validacion is not defined', () => {
    component.validation = undefined;

    const mockActividad: IActividad = actividad2;
    const mockCdkDrag: CdkDrag<IActividad> = {
      data: mockActividad,
    } as CdkDrag<IActividad>;

    const result = component.validationCDK(mockCdkDrag);

    expect(result).toBe(false);
  });

  it('should return false when validacion.action returns false', () => {
    component.validation = {
      action: jasmine.createSpy('actionSpy').and.returnValue(false),
      estado: EstadoActividad.Pendiente,
    };

    const mockActividad: IActividad = actividad2;
    const mockCdkDrag: CdkDrag<IActividad> = {
      data: mockActividad,
    } as CdkDrag<IActividad>;

    const result = component.validationCDK(mockCdkDrag);

    expect(component.validation.action).toHaveBeenCalledWith(
      mockActividad,
      EstadoActividad.Pendiente,
    );
    expect(result).toBe(false);
  });

  describe('validationCDK method', () => {
    it('should return true when validation.action returns true', () => {
      const mockActividad: IActividad = actividad1;

      component.validation = {
        action: jasmine.createSpy('actionSpy').and.returnValue(true),
        estado: EstadoActividad.Pendiente,
      };

      const result = component.validationCDK({ data: mockActividad } as any);

      expect(component.validation.action).toHaveBeenCalledWith(
        mockActividad,
        EstadoActividad.Pendiente,
      );
      expect(result).toBe(true);
    });

    it('should return false when validation is not defined', () => {
      const mockActividad: IActividad = actividad1;

      component.validation = undefined;

      const result = component.validationCDK({ data: mockActividad } as any);

      expect(result).toBe(false);
    });
  });
});
