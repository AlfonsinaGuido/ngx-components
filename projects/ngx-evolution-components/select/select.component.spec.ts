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

  it('should emit valueChange when selecting an option, onValueChange()', () => {
    component.control = new FormControl('1');

    spyOn(component, 'onValueChange').and.callThrough();
    spyOn(component.valueChange, 'emit');

    const matSelect = fixture.debugElement.query(By.css('mat-select'));
    matSelect.triggerEventHandler('selectionChange', { value: '1' });

    fixture.detectChanges();

    expect(component.onValueChange).toHaveBeenCalled();
    expect(component.valueChange.emit).toHaveBeenCalledWith('1');
  });

  it('should reset control and close select on clean, clean()', () => {
    spyOn(component.valueChange, 'emit');
    spyOn(component.control, 'reset');
    component.selectControl = { close: jasmine.createSpy('close') } as any;

    component.clean();

    expect(component.control.reset).toHaveBeenCalled();
    expect(component.valueChange.emit).toHaveBeenCalledWith(null);
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
