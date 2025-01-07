import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary.component';
import { DebugElement } from '@angular/core';
import { ISummaryElement } from '../public-api';
import { By } from '@angular/platform-browser';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title correctly', () => {
    const testTitle = 'Test Title';
    component.title = testTitle;
    component.elements = [];
    fixture.detectChanges();

    const titleElement = debugElement.query(
      By.css('.text-xl.font-bold'),
    ).nativeElement;
    expect(titleElement.textContent.trim()).toBe(testTitle);
  });

  it('should render all summary elements', () => {
    const mockElements: ISummaryElement[] = [
      { title: 'Element 1', description: 'Description 1' },
      { title: 'Element 2', description: 'Description 2' },
    ];
    component.title = 'Test Title';
    component.elements = mockElements;
    fixture.detectChanges();

    const elementTitles = debugElement.queryAll(By.css('.test-element-title'));
    const elementDescriptions = debugElement.queryAll(
      By.css('.test-element-description'),
    );

    expect(elementTitles.length).toBe(mockElements.length);
    expect(elementDescriptions.length).toBe(mockElements.length);

    mockElements.forEach((element, index) => {
      expect(elementTitles[index].nativeElement.textContent.trim()).toBe(
        element.title,
      );
      expect(elementDescriptions[index].nativeElement.textContent.trim()).toBe(
        element.description,
      );
    });
  });

  it('should apply the custom Tailwind class', () => {
    const customClass = 'custom-class';
    component.title = 'Test Title';
    component.elements = [];
    component.twClass = customClass;
    fixture.detectChanges();

    const containerElement = debugElement.query(By.css('div')).nativeElement;
    expect(containerElement.classList).toContain(customClass);
  });
});
