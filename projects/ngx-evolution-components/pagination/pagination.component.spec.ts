import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PaginationComponent } from './pagination.component';
import { ButtonComponent } from '../public-api';
import { CommonModule } from '@angular/common';
import { ClassUtilityService } from '../shared/services/class-utility.service';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let mockClassUtilityService: jasmine.SpyObj<ClassUtilityService>;

  beforeEach(async () => {
    mockClassUtilityService = jasmine.createSpyObj('ClassUtilityService', [
      'getCombinedClasses',
    ]);

    await TestBed.configureTestingModule({
      imports: [PaginationComponent, CommonModule, ButtonComponent],
      providers: [
        { provide: ClassUtilityService, useValue: mockClassUtilityService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct page indicator text using getPageIndicatorText method', () => {
    component.config = { ...component.config, currentPage: 2, totalPages: 5 };
    fixture.detectChanges();

    const pageIndicatorText = component.getPageIndicatorText();
    expect(pageIndicatorText).toBe('Página 2 de 5');
  });

  it('should return correct items range text using getItemsRangeText method', () => {
    component.config = {
      ...component.config,
      currentPage: 3,
      pageSize: 10,
      totalItems: 25,
      titles: {
        showing: 'Mostrando',
        results: 'resultados',
        page: 'Página',
        of: 'de',
      },
    };
    fixture.detectChanges();

    const itemsRangeText = component.getItemsRangeText();
    expect(itemsRangeText).toBe('Mostrando 25 - 25 resultados');
  });

  it('should disable the previous button on the first page', () => {
    component.config = { ...component.config, currentPage: 1 };
    fixture.detectChanges();

    const prevButton = fixture.debugElement.query(
      By.css('.pagination__evo-button'),
    );
    expect(prevButton).toBeTruthy();
    expect(prevButton.nativeElement.disabled).toBeTrue();
  });

  it('should disable the next button on the last page', () => {
    component.config = { ...component.config, currentPage: 5, totalPages: 5 };
    fixture.detectChanges();

    const nextButton = fixture.debugElement.queryAll(
      By.css('.pagination__evo-button'),
    )[1];
    expect(nextButton).toBeTruthy();
    expect(nextButton.nativeElement.disabled).toBeTrue();
  });

  it('should emit previousPageClicked event when previous button is clicked and not on the first page', () => {
    spyOn(component.previousPageClicked, 'emit');
    component.config = { ...component.config, currentPage: 2 };
    fixture.detectChanges();

    const prevButton = fixture.debugElement.queryAll(By.css('evo-button'))[0];
    expect(prevButton).toBeTruthy();
    prevButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.previousPageClicked.emit).toHaveBeenCalled();
  });

  it('should emit nextPageClicked event when next button is clicked and not on the last page', () => {
    spyOn(component.nextPageClicked, 'emit');
    component.config = { ...component.config, currentPage: 2, totalPages: 5 };
    fixture.detectChanges();

    const nextButton = fixture.debugElement.queryAll(By.css('evo-button'))[1];
    expect(nextButton).toBeTruthy();
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.nextPageClicked.emit).toHaveBeenCalled();
  });

  it('should calculate the correct range of items shown', () => {
    component.config = {
      ...component.config,
      currentPage: 2,
      pageSize: 10,
      totalItems: 35,
      titles: {
        showing: 'Mostrando',
        results: 'resultados',
        page: 'Página',
        of: 'de',
      },
    };
    fixture.detectChanges();

    const rangeText = component.getItemsRangeText();
    expect(rangeText).toBe('Mostrando 20 - 35 resultados');
  });

  it('should return the correct minimum value using getMinValue method', () => {
    const minValue = component.getMinValue(10, 20);
    expect(minValue).toBe(10);

    const minValue2 = component.getMinValue(30, 15);
    expect(minValue2).toBe(15);
  });

  it('should call getCombinedClasses on the ClassUtilityService with correct parameters', () => {
    const mockTwClass = 'custom-class';
    component.config.twClass = mockTwClass;
    mockClassUtilityService.getCombinedClasses.and.returnValue(
      'evo-pagination custom-class',
    );
    fixture.detectChanges();

    const classes = component.getClasses();
    expect(mockClassUtilityService.getCombinedClasses).toHaveBeenCalledWith(
      'evo-pagination',
      mockTwClass,
    );
    expect(classes).toBe('evo-pagination custom-class');
  });
});
