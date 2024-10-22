import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ClassUtilityService } from '../shared/services/class-utility.service';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let mockClassUtilityService: jasmine.SpyObj<ClassUtilityService>;

  beforeEach(async () => {
    mockClassUtilityService = jasmine.createSpyObj('ClassUtilityService', [
      'getCombinedClasses',
    ]);

    await TestBed.configureTestingModule({
      imports: [SearchBarComponent, CommonModule, FormsModule, MatIconModule],
      providers: [
        { provide: ClassUtilityService, useValue: mockClassUtilityService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the placeholder text correctly', () => {
    component.placeholder = 'Search...';
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.css('input'));
    expect(inputElement.nativeElement.getAttribute('placeholder')).toBe(
      'Search...',
    );
  });

  it('should update inputValue when typing in the input field', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.value = 'test query';
    inputElement.triggerEventHandler('input', {
      target: inputElement.nativeElement,
    });
    fixture.detectChanges();

    expect(component.inputValue).toBe('test query');
  });

  it('should emit searchQuery after typing and delay', fakeAsync(() => {
    spyOn(component.searchQuery, 'emit');
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.value = 'test query';
    inputElement.triggerEventHandler('input', {
      target: inputElement.nativeElement,
    });
    tick(400);
    fixture.detectChanges();

    expect(component.searchQuery.emit).toHaveBeenCalledWith('test query');
  }));

  it('should clear the input and emit an empty searchQuery when clear icon is clicked', () => {
    spyOn(component.searchQuery, 'emit');
    component.inputValue = 'test query';
    fixture.detectChanges();

    const clearIcon = fixture.debugElement.query(By.css('.clear-icon'));
    clearIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.inputValue).toBe('');
    expect(component.searchQuery.emit).toHaveBeenCalledWith('');
  });

  it('should call getCombinedClasses on the ClassUtilityService with correct parameters', () => {
    const mockTwClass = 'custom-class';
    component.twClass = mockTwClass;
    mockClassUtilityService.getCombinedClasses.and.returnValue(
      'evo-search-bar custom-class',
    );
    fixture.detectChanges();

    const classes = component.getClasses();
    expect(mockClassUtilityService.getCombinedClasses).toHaveBeenCalledWith(
      'evo-search-bar',
      mockTwClass,
    );
    expect(classes).toBe('evo-search-bar custom-class');
  });
});
