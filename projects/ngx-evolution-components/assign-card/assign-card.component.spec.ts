import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AssignCardComponent } from '../public-api';
import { ButtonComponent } from '../public-api';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ClassUtilityService } from '../shared/services/class-utility.service';

describe('AssignCardComponent', () => {
  let component: AssignCardComponent;
  let fixture: ComponentFixture<AssignCardComponent>;
  let mockClassUtilityService: jasmine.SpyObj<ClassUtilityService>;

  beforeEach(async () => {
    mockClassUtilityService = jasmine.createSpyObj('ClassUtilityService', [
      'getCombinedClasses',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        AssignCardComponent,
        CommonModule,
        MatIconModule,
        ButtonComponent,
      ],
      providers: [
        { provide: ClassUtilityService, useValue: mockClassUtilityService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display empty state message when there are no items', () => {
    component.config = {
      ...component.config,
      items: [],
      emptyStateText: 'No hay elementos disponibles',
    };
    fixture.detectChanges();

    const emptyStateMessage = fixture.debugElement.query(
      By.css('.empty-state'),
    );
    expect(emptyStateMessage.nativeElement.textContent).toContain(
      'No hay elementos disponibles',
    );
  });

  it('should display items when config has items', () => {
    component.config = {
      ...component.config,
      items: [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
      ],
    };
    fixture.detectChanges();

    const itemList = fixture.debugElement.queryAll(By.css('.name-item'));
    expect(itemList.length).toBe(2);
    expect(itemList[0].nativeElement.textContent).toContain('Item 1');
    expect(itemList[1].nativeElement.textContent).toContain('Item 2');
  });

  it('should apply hover class when item is hovered', () => {
    component.config = {
      ...component.config,
      items: [{ id: '1', name: 'Item 1' }],
    };
    fixture.detectChanges();

    const itemElement = fixture.debugElement.query(By.css('.name-item'));
    itemElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    expect(itemElement.nativeElement.classList).toContain('name-hovered');
  });

  it('should emit removeItem event when remove button is clicked', () => {
    spyOn(component.removeItem, 'emit');
    component.config = {
      ...component.config,
      items: [{ id: '1', name: 'Item 1' }],
    };
    fixture.detectChanges();

    const removeButton = fixture.debugElement.query(By.css('evo-button'));
    removeButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.removeItem.emit).toHaveBeenCalledWith('1');
  });

  it('should emit buttonClick event with item IDs when action button is clicked', () => {
    spyOn(component.buttonClick, 'emit');
    component.config = {
      ...component.config,
      items: [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
      ],
      buttonText: 'Click Me',
    };
    fixture.detectChanges(); // Actualizamos la vista

    const actionButton = fixture.debugElement.query(By.css('.action-button'));
    actionButton.nativeElement.click(); // Disparamos el evento click
    fixture.detectChanges(); // Actualizamos la vista después del click

    expect(component.buttonClick.emit).toHaveBeenCalledWith(['1', '2']);
  });

  it('should disable the action button when there are no items', () => {
    component.config = {
      ...component.config,
      items: [],
    };
    fixture.detectChanges();

    const actionButton = fixture.debugElement.query(By.css('.action-button'));
    expect(actionButton.properties['disabled']).toBeTrue();
  });

  it('should call getCombinedClasses on the ClassUtilityService with correct parameters', () => {
    const mockTwClass = 'custom-class';
    component.config.twClass = mockTwClass;
    mockClassUtilityService.getCombinedClasses.and.returnValue(
      'card custom-class',
    );
    fixture.detectChanges();

    const classes = component.getClasses();
    expect(mockClassUtilityService.getCombinedClasses).toHaveBeenCalledWith(
      'card',
      mockTwClass,
    );
    expect(classes).toBe('card custom-class');
  });
});
