import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionMenuComponent } from './action-menu.component';
import { ButtonComponent, IActionConfig, IIcon } from '../public-api';
import { CommonModule } from '@angular/common';
import { ClassUtilityService } from '../shared/services/class-utility.service';

describe('ActionMenuComponent', () => {
  let component: ActionMenuComponent;
  let fixture: ComponentFixture<ActionMenuComponent>;
  let mockClassUtilityService: jasmine.SpyObj<ClassUtilityService>;

  beforeEach(async () => {
    mockClassUtilityService = jasmine.createSpyObj('ClassUtilityService', [
      'getCombinedClasses',
    ]);

    await TestBed.configureTestingModule({
      imports: [ActionMenuComponent, CommonModule, ButtonComponent],
      providers: [
        { provide: ClassUtilityService, useValue: mockClassUtilityService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not apply open class when config.isOpen is false', () => {
    component.config = {
      ...component.config,
      isOpen: false,
    };
    fixture.detectChanges();

    const menuElement = fixture.debugElement.query(By.css('.actions-menu'));
    expect(menuElement).toBeFalsy();
  });

  it('should close the actions menu and emit menuClosed event when overlay is clicked', () => {
    spyOn(component, 'closeActionsMenu').and.callThrough();
    spyOn(component.menuClosed, 'emit');

    component.config = {
      ...component.config,
      isOpen: true,
    };
    fixture.detectChanges();

    const overlayElement = fixture.debugElement.query(By.css('.overlay'));
    overlayElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.closeActionsMenu).toHaveBeenCalled();
    expect(component.menuClosed.emit).toHaveBeenCalled();
  });

  it('should emit actionSelected event with action code and close menu on action button click', () => {
    spyOn(component.actionSelected, 'emit');
    spyOn(component, 'closeActionsMenu').and.callThrough();

    const actions: IActionConfig[] = [
      { Code: 'action1', Text: 'Action 1', Visible: true },

      {
        Code: 'action2',
        Text: 'Action 2',
        Visible: true,
      },
    ];
    component.config = {
      ...component.config,
      actions,
      isOpen: true,
    };
    fixture.detectChanges();

    const actionButtons = fixture.debugElement.queryAll(By.css('evo-button'));
    actionButtons[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.actionSelected.emit).toHaveBeenCalledWith('action1');
    expect(component.closeActionsMenu).toHaveBeenCalled();
  });

  it('should get the correct icon for the action based on its index', () => {
    const icons: IIcon[] = [
      { type: 'class', icon: 'icon1' },
      { type: 'class', icon: 'icon2' },
    ];
    component.config = {
      ...component.config,
      icons,
    };

    expect(component.getActionIcon(0)).toEqual(icons[0]);
    expect(component.getActionIcon(1)).toEqual(icons[1]);
    expect(component.getActionIcon(2)).toBeUndefined();
  });

  it('should return true for shouldShowTooltip when text length exceeds the maxLength', () => {
    const longText =
      'This is a very long action text that should trigger a tooltip';
    expect(component.shouldShowTooltip(longText)).toBeTrue();
  });

  it('should return false for shouldShowTooltip when text length is within maxLength', () => {
    const shortText = 'Short text';
    expect(component.shouldShowTooltip(shortText)).toBeFalse();
  });

  it('should call getCombinedClasses on the ClassUtilityService with correct parameters', () => {
    const mockTwClass = 'custom-class';
    component.config.twClass = mockTwClass;
    mockClassUtilityService.getCombinedClasses.and.returnValue(
      'actions-menu custom-class',
    );
    fixture.detectChanges();

    const classes = component.getClasses();
    expect(mockClassUtilityService.getCombinedClasses).toHaveBeenCalledWith(
      'actions-menu',
      mockTwClass,
    );
    expect(classes).toBe('actions-menu custom-class');
  });
});
