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
import { CustomErrorStateMatcher } from '../public-api';

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
    component.inputConfiguration = {
      control: new FormControl(),
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to valueChanges on init, ngOnInit()', () => {
    const valueChangesSpy = spyOn(
      component.inputConfiguration.control.valueChanges,
      'subscribe',
    );
    component.ngOnInit();
    expect(valueChangesSpy).toHaveBeenCalledWith(jasmine.any(Function));
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
    component.inputConfiguration.control.setValue('test');
    component.inputConfiguration.control.markAsDirty();
    component.inputConfiguration.control.setErrors({ required: true });

    const form = {} as FormGroupDirective;

    expect(
      matcher.isErrorState(component.inputConfiguration.control, form),
    ).toBeTrue();
  });

  it('should return false if control is valid', () => {
    matcher = new CustomErrorStateMatcher();
    component.inputConfiguration.control.setValue('test');
    component.inputConfiguration.control.markAsDirty();

    const form = {} as FormGroupDirective;

    expect(
      matcher.isErrorState(component.inputConfiguration.control, form),
    ).toBeFalse();
  });

  it('should return true if control is invalid and form is submitted', () => {
    matcher = new CustomErrorStateMatcher();
    component.inputConfiguration.control.setErrors({ required: true });

    const form = { submitted: true } as FormGroupDirective;

    expect(
      matcher.isErrorState(component.inputConfiguration.control, form),
    ).toBeTrue();
  });

  it('should reset control and output the new value, clean(event: any)', () => {
    spyOn(component.valueChange, 'emit');
    spyOn(component.inputConfiguration.control, 'reset');

    const event = { target: { value: 'test' } };
    component.clean(event);

    expect(component.inputConfiguration.control.reset).toHaveBeenCalled();
    expect(component.valueChange.emit).toHaveBeenCalledWith('test');
  });
});
