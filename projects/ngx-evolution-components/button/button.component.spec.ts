import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default properties set correctly', () => {
    expect(component.theme).toBe('default');
    expect(component.isFlat).toBe(false);
    expect(component.isFluid).toBe(false);
    expect(component.withoutBorder).toBe(false);
  });

  it('should calculate classes correctly, get getClasses()', () => {
    component.label = '';
    component.icon = { icon: 'test-icon.svg', type: 'svg' };
    component.theme = 'primary';
    component.disabled = true;
    component.classes = 'extra-class';
    component.isFlat = true;
    component.isFluid = false;
    component.withoutBorder = true;

    fixture.detectChanges();

    const expectedClasses = {
      'extra-class': true,
      'theme-primary': true,
      disabled: true,
      'is-flat': true,
      'is-fluid': false,
      'only-icon': true,
      'without-border': true,
    };

    expect(component.getClasses).toEqual(expectedClasses);
  });
});
