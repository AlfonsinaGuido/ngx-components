import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { IFilter } from '../public-api';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent, ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    component.fields = { fields: [] } as IFilter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form on init', () => {
    expect(component.form).toBeDefined();
    expect(component.form.controls['emailFieldInput']).toBeDefined();
  });

  it('should emit filterResponse when applyFilter is called', () => {
    spyOn(component.filterResponse, 'emit');
    component.response = [{ id: 'test', content: 'value' }];
    component.applyFilter();
    expect(component.filterResponse.emit).toHaveBeenCalledWith([
      { id: 'test', content: 'value' },
    ]);
  });

  it('should update response array when getInputValue is called', () => {
    component.getInputValue('testValue', 'testId');
    expect(component.response).toEqual([
      { id: 'testId', content: 'testValue' },
    ]);
  });

  it('should reset fields when cleanFields is called', () => {
    spyOn(component.filterResponse, 'emit');

    component.response = [{ id: 'testId', content: 'testValue' }];
    component.cleanFields();

    expect(component.response.every((res) => res.content === '')).toBeTrue();
    expect(component.filterResponse.emit).toHaveBeenCalledWith(
      component.response,
    ); // Ensure emit is called with updated response
  });
});
