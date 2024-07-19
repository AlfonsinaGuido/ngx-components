import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../public-api';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
});
