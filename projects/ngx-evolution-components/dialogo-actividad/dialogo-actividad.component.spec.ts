import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogoActividadComponent } from './dialogo-actividad.component';
import { actividad1 as actividad } from '../shared/data/kanban/actividades.data';

describe('DialogoActividadComponent', () => {
  let component: DialogoActividadComponent;
  let fixture: ComponentFixture<DialogoActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoActividadComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { actividad } },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should assign default data and information received from MatDialogData', () => {
    expect(component.data.actividad).toBe(actividad);
  });

  it('should render the activity name as the first p element', () => {
    const pElement = fixture.nativeElement.querySelector('p');
    expect(pElement.textContent.trim()).toBe(actividad.nombre);
  });

  it('should render a tag component with the activity priority', () => {
    const tagElement = fixture.nativeElement.querySelector('evo-tag');
    expect(tagElement).toBeTruthy();
  });
});
