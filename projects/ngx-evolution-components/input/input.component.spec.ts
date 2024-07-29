import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import {
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomErrorStateMatcher } from '../shared/custom-error-state-matcher';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let matcher: CustomErrorStateMatcher;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InputComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to valueChanges on init, ngOnInit()', () => {
    spyOn(component.control.valueChanges, 'subscribe');
    component.ngOnInit();
    expect(component.control.valueChanges.subscribe).toHaveBeenCalled();
  });

  it('should unsubscribe from valueChanges on destroy, ngOnDestroy()', () => {
    component.ngOnInit();
    spyOn(component['valueChangesSubscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(
      component['valueChangesSubscription'].unsubscribe,
    ).toHaveBeenCalled();
  });

  it('should return true if control is invalid, dirty, and not touched or submitted', () => {
    matcher = new CustomErrorStateMatcher();
    component.control.setValue('test');
    component.control.markAsDirty();
    component.control.setErrors({ required: true });

    const form = {} as FormGroupDirective;

    expect(matcher.isErrorState(component.control, form)).toBeTrue();
  });

  it('should return false if control is valid', () => {
    matcher = new CustomErrorStateMatcher();
    component.control.setValue('test');
    component.control.markAsDirty();

    const form = {} as FormGroupDirective;

    expect(matcher.isErrorState(component.control, form)).toBeFalse();
  });

  it('should return true if control is invalid and form is submitted', () => {
    matcher = new CustomErrorStateMatcher();
    component.control.setErrors({ required: true });

    const form = { submitted: true } as FormGroupDirective;

    expect(matcher.isErrorState(component.control, form)).toBeTrue();
  });
});
