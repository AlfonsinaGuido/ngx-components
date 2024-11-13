import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../public-api';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { By } from '@angular/platform-browser';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SelectComponent,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        ButtonComponent,
      ],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    component.items = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit valueChange on value change, onValueChange(event: any)', () => {
    spyOn(component.valueChange, 'emit');

    const event = { value: 'test' };
    component.onValueChange(event);

    expect(component.valueChange.emit).toHaveBeenCalledWith('test');
  });

  it('should reset control and close select on clean, clean(event: any)', () => {
    spyOn(component.valueChange, 'emit');
    spyOn(component.control, 'reset');
    component.selectControl = { close: jasmine.createSpy('close') } as any;

    const event = { target: { value: 'test' } };
    component.clean(event);

    expect(component.control.reset).toHaveBeenCalled();
    expect(component.valueChange.emit).toHaveBeenCalledWith('test');
    expect(component.selectControl.close).toHaveBeenCalled();
  });

  it('should render the mat-form-field with custom classes', () => {
    component.twClass = 'extra-class';
    fixture.detectChanges();
    const matFormField = fixture.debugElement.query(By.css('.mat-form-select'));
    expect(matFormField.classes['extra-class']).toBeTrue();
  });

  it('should display mat-label if `label` is defined', () => {
    component.label = 'Etiqueta de prueba';
    fixture.detectChanges();
    const matLabel = fixture.debugElement.query(By.css('mat-label'));
    expect(matLabel.nativeElement.textContent).toContain('Etiqueta de prueba');
  });

  it('should display mat-hint if `detail` is defined', () => {
    component.detail = 'Detalle adicional';
    fixture.detectChanges();
    const matHint = fixture.debugElement.query(By.css('mat-hint'));
    expect(matHint.nativeElement.textContent).toContain('Detalle adicional');
  });

  it('should issue a value change when selecting an option', () => {
    spyOn(component, 'onValueChange');
    const selectControl = fixture.debugElement.query(By.css('mat-select'));
    selectControl.triggerEventHandler('selectionChange', { value: 'opción1' });
    fixture.detectChanges();
    expect(component.onValueChange).toHaveBeenCalledWith({ value: 'opción1' });
  });

  it('should set `mat-select` to multiple when `isMultiple` is true', () => {
    component.isMultiple = true;
    fixture.detectChanges();
    const matSelect = fixture.debugElement.query(By.css('mat-select'));
    expect(matSelect.attributes['multiple']).toBeDefined();
  });

  it('should set `mat-select` to required when `isRequired` is true', () => {
    component.isRequired = true;
    fixture.detectChanges();
    const matSelect = fixture.debugElement.query(By.css('mat-select'));
    expect(matSelect.attributes['required']).toBeDefined();
  });
});
