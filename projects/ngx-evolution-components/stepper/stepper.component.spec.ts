import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperComponent } from './stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ButtonComponent } from '../button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { IStepperConfig } from '../public-api';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatStepperModule,
        ButtonComponent,
        MatIconModule,
        StepperComponent,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    component.stepperConfig = {
      steps: [
        { title: 'Step 1', text: 'Description 1' },
        { title: 'Step 2', text: 'Description 2' },
      ],
      selectedStepIndex: 0,
      highestCompletedIndex: 0,
      canContinue: true,
      orientation: 'horizontal',
      continueButtonText: 'Continue',
      backButtonText: 'Back',
      twClass: '',
    } as IStepperConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with valid stepper configuration', () => {
    expect(component.stepperConfig.steps.length).toBe(2);
    expect(component.stepperConfig.selectedStepIndex).toBe(0);
  });

  it('should not proceed to next step if canContinue is false', () => {
    component.stepperConfig.canContinue = false;
    component.onContinue();
    expect(component.stepperConfig.selectedStepIndex).toBe(0);
  });

  it('should proceed to next step if canContinue is true', () => {
    component.onContinue();
    expect(component.stepperConfig.selectedStepIndex).toBe(1);
  });

  it('should not go to a step beyond the highestCompletedIndex + 1', () => {
    component.stepperConfig.highestCompletedIndex = 0;
    component.stepperConfig.selectedStepIndex = 1;
    const event = { selectedIndex: 2 } as any;
    component.onStepSelectionChange(event);
    expect(component.stepperConfig.selectedStepIndex).toBe(1);
  });

  it('should emit stepChanged event when step changes', () => {
    spyOn(component.stepChanged, 'emit');
    component.onContinue();
    expect(component.stepChanged.emit).toHaveBeenCalledWith(1);
  });

  it('should not allow navigating to a disallowed step', () => {
    const event = { selectedIndex: 2 } as any;
    component.stepperConfig.highestCompletedIndex = 0;
    component.onStepSelectionChange(event);
    expect(component.stepperConfig.selectedStepIndex).toBe(0);
  });

  it('should apply correct accessibility attributes for allowed steps', () => {
    spyOn(component, 'isStepAllowed').and.returnValue(true);
    (component as any).applyStepAccessibility();
    const headers = fixture.debugElement.queryAll(By.css('.mat-step-header'));
    headers.forEach((header) => {
      expect(header.nativeElement.getAttribute('tabindex')).toBe('0');
      expect(header.nativeElement.style.pointerEvents).toBe('auto');
    });
  });

  it('should apply correct accessibility attributes for disallowed steps', () => {
    spyOn(component, 'isStepAllowed').and.returnValue(false);
    (component as any).applyStepAccessibility();
    const headers = fixture.debugElement.queryAll(By.css('.mat-step-header'));
    headers.forEach((header) => {
      expect(header.nativeElement.getAttribute('tabindex')).toBe('-1');
      expect(header.nativeElement.style.pointerEvents).toBe('none');
    });
  });

  it('should return correct classes for stepper context', () => {
    spyOn(component['_classUtility'], 'getCombinedClasses').and.returnValue(
      'custom-class',
    );
    const result = component.getClasses('test-context');
    expect(result).toBe('custom-class');
  });

  it('should update stepper accessibility when stepperConfig changes', () => {
    const updatedConfig = {
      ...component.stepperConfig,
      highestCompletedIndex: 1,
    };
    component.stepperConfig = updatedConfig;
    fixture.detectChanges();

    const headers = fixture.debugElement.queryAll(By.css('.mat-step-header'));
    headers.forEach((header, index) => {
      if (index <= 1) {
        expect(header.nativeElement.getAttribute('tabindex')).toBe('0');
      } else {
        expect(header.nativeElement.getAttribute('tabindex')).toBe('-1');
      }
    });
  });

  it('should handle empty steps gracefully', () => {
    component.stepperConfig.steps = [];
    fixture.detectChanges();

    expect(component.stepperConfig.steps.length).toBe(0);
    expect(() => component.onContinue()).not.toThrow();
  });

  it('should update highestCompletedIndex dynamically', () => {
    component.stepperConfig.highestCompletedIndex = 1;
    fixture.detectChanges();
    expect(component.stepperConfig.highestCompletedIndex).toBe(1);
  });

  it('should default highestCompletedIndex to 0 if it is negative', () => {
    component.stepperConfig.highestCompletedIndex = -1;
    component.ngOnInit();
    expect(component.stepperConfig.highestCompletedIndex).toBe(0);
  });

  it('should allow steps up to highestCompletedIndex', () => {
    expect(component.isStepAllowed(0)).toBeTrue();
  });

  it('should allow next step if canContinue is true', () => {
    component.stepperConfig.highestCompletedIndex = 1;
    component.stepperConfig.canContinue = true;
    expect(component.isStepAllowed(2)).toBeTrue();
  });

  it('should not allow steps beyond highestCompletedIndex + 1', () => {
    component.stepperConfig.highestCompletedIndex = 1;
    expect(component.isStepAllowed(3)).toBeFalse();
  });

  it('should set selectedStepIndex to the previous step on onBack()', () => {
    component.stepperConfig.selectedStepIndex = 1;
    component.onBack();
    expect(component.stepperConfig.selectedStepIndex).toBe(0);
  });

  it('should not go back if on the first step on onBack()', () => {
    component.stepperConfig.selectedStepIndex = 0;
    component.onBack();
    expect(component.stepperConfig.selectedStepIndex).toBe(0);
  });

  it('should not allow onContinue if selectedStepIndex is the last step', () => {
    component.stepperConfig.selectedStepIndex = 1;
    component.stepperConfig.steps = [
      { title: 'Step 1', text: 'Description 1' },
      { title: 'Step 2', text: 'Description 2' },
    ];
    component.onContinue();
    expect(component.stepperConfig.selectedStepIndex).toBe(1);
  });

  it('should not allow navigation if step index is out of range', () => {
    const event = { selectedIndex: -1 } as any;
    component.onStepSelectionChange(event);
    expect(component.stepperConfig.selectedStepIndex).toBe(0);
  });

  it('should reset highestCompletedIndex if steps are updated to a smaller size', () => {
    component.stepperConfig.steps = [
      { title: 'Step 1', text: 'Description 1' },
    ];
    component.stepperConfig.highestCompletedIndex = 2;
    component.ngOnInit();
    expect(component.stepperConfig.highestCompletedIndex).toBe(0);
  });

  it('should handle undefined steps gracefully in ngOnInit', () => {
    component.stepperConfig.steps = undefined as any;
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should disable steps with tabindex -1 if they are not allowed', () => {
    spyOn(component, 'isStepAllowed').and.returnValue(false);
    (component as any).applyStepAccessibility();
    const headers = fixture.debugElement.queryAll(By.css('.mat-step-header'));
    headers.forEach((header) => {
      expect(header.nativeElement.getAttribute('tabindex')).toBe('-1');
    });
  });

  it('should enable steps with tabindex 0 if they are allowed', () => {
    spyOn(component, 'isStepAllowed').and.returnValue(true);
    (component as any).applyStepAccessibility();
    const headers = fixture.debugElement.queryAll(By.css('.mat-step-header'));
    headers.forEach((header) => {
      expect(header.nativeElement.getAttribute('tabindex')).toBe('0');
    });
  });

  it('should update highestCompletedIndex when navigating to an allowed step', () => {
    const event = { selectedIndex: 1 } as StepperSelectionEvent;
    component.stepperConfig.highestCompletedIndex = 0;
    component.onStepSelectionChange(event);
    expect(component.stepperConfig.highestCompletedIndex).toBe(1);
  });

  it('should not update selectedStepIndex if navigation to disallowed step', () => {
    const event = { selectedIndex: 3 } as StepperSelectionEvent;
    component.stepperConfig.highestCompletedIndex = 1;
    component.onStepSelectionChange(event);
    expect(component.stepperConfig.selectedStepIndex).toBe(0);
  });

  it('should emit continueClicked on continue button click', () => {
    spyOn(component.continueClicked, 'emit');
    component.onContinue();
    expect(component.continueClicked.emit).toHaveBeenCalled();
  });

  it('should emit backClicked on back button click', () => {
    spyOn(component.backClicked, 'emit');
    component.stepperConfig.selectedStepIndex = 1;
    component.onBack();
    expect(component.backClicked.emit).toHaveBeenCalled();
  });

  it('should not modify highestCompletedIndex if step navigation fails', () => {
    const event = { selectedIndex: 3 } as StepperSelectionEvent;
    component.stepperConfig.highestCompletedIndex = 1;
    component.onStepSelectionChange(event);
    expect(component.stepperConfig.highestCompletedIndex).toBe(1);
  });

  it('should allow navigating back to a previous step', () => {
    component.stepperConfig.highestCompletedIndex = 2;
    const event = { selectedIndex: 1 } as StepperSelectionEvent;
    component.onStepSelectionChange(event);
    expect(component.stepperConfig.selectedStepIndex).toBe(1);
  });
});
