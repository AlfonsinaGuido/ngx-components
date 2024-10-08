import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AccordionComponent } from './accordion.component';
import { ButtonComponent, IIcon } from '../public-api';
import { CommonModule } from '@angular/common';
import { ClassUtilityService } from '../shared/services/class-utility.service';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let mockClassUtilityService: jasmine.SpyObj<ClassUtilityService>;

  beforeEach(async () => {
    // Crear un mock para el servicio ClassUtilityService
    mockClassUtilityService = jasmine.createSpyObj('ClassUtilityService', [
      'getCombinedClasses',
    ]);

    await TestBed.configureTestingModule({
      imports: [AccordionComponent, CommonModule, ButtonComponent],
      providers: [
        { provide: ClassUtilityService, useValue: mockClassUtilityService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the isOpen state when toggleAccordion is called', () => {
    expect(component.isOpen).toBeFalse();

    component.toggleAccordion();
    expect(component.isOpen).toBeTrue();

    component.toggleAccordion();
    expect(component.isOpen).toBeFalse();
  });

  it('should apply the correct max-height style based on the height input', () => {
    component.config.height = '300px';
    fixture.detectChanges();

    expect(component.maxHeight).toBe('300px');

    component.config.height = 'auto';
    fixture.detectChanges();

    expect(component.maxHeight).toBe('none');
  });

  it('should apply the open class to accordion content when isOpen is true', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const contentElement = fixture.debugElement.query(
      By.css('.accordion-content'),
    );
    expect(contentElement.nativeElement.classList).toContain('open');
  });

  it('should not apply the open class to accordion content when isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();

    const contentElement = fixture.debugElement.query(
      By.css('.accordion-content'),
    );
    expect(contentElement.nativeElement.classList).not.toContain('open');
  });

  it('should call getCombinedClasses on the ClassUtilityService with correct parameters', () => {
    const mockTwClass = 'custom-class';
    component.config.twClass = mockTwClass;
    mockClassUtilityService.getCombinedClasses.and.returnValue(
      'accordion custom-class',
    );
    fixture.detectChanges();

    const classes = component.getClasses();
    expect(mockClassUtilityService.getCombinedClasses).toHaveBeenCalledWith(
      'accordion',
      mockTwClass,
    );
    expect(classes).toBe('accordion custom-class');
  });

  it('should update the icon based on the isOpen state', () => {
    component.isOpen = true;
    fixture.detectChanges();

    const toggleButton = fixture.debugElement.queryAll(By.css('evo-button'))[1];
    expect(toggleButton.componentInstance.icon.icon).toBe('expand_less');

    component.isOpen = false;
    fixture.detectChanges();

    expect(toggleButton.componentInstance.icon.icon).toBe('expand_more');
  });

  it('should trigger toggleAccordion when accordion header is clicked', () => {
    spyOn(component, 'toggleAccordion').and.callThrough();

    const headerElement = fixture.debugElement.query(
      By.css('.accordion-header'),
    );
    headerElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.toggleAccordion).toHaveBeenCalled();
    expect(component.isOpen).toBeTrue();
  });
});
