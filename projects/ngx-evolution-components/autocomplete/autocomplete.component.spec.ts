import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocompleteComponent } from './autocomplete.component';
import { FormControl } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteComponent],
      providers: [provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    component.inputConfiguration = {
      control: new FormControl(),
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter options based on the input value, public filter(): void', () => {
    component.items = [
      { Id: '1', Description: 'Apple', Bag: {} },
      { Id: '2', Description: 'Banana', Bag: {} },
      { Id: '3', Description: 'Orange', Bag: {} },
    ];
    component.filteredOptions = component.items.slice();
    fixture.detectChanges();

    component.input = {
      nativeElement: { value: 'ap' },
    } as ElementRef<HTMLInputElement>;

    component.filter();

    expect(component.filteredOptions).toEqual([
      { Id: '1', Description: 'Apple', Bag: {} },
    ]);
  });

  it('should clean up the valueChanges subscription on ngOnDestroy', () => {
    const mockSubscription = new Subscription();
    spyOn(mockSubscription, 'unsubscribe');
    component['valueChangesSubscription'] = mockSubscription;

    component.ngOnDestroy();

    expect(mockSubscription.unsubscribe).toHaveBeenCalled();
  });

  it('should reset control and output the new value, public clean(event: any): void', () => {
    spyOn(component.valueChange, 'emit');
    spyOn(component.inputConfiguration.control, 'reset');

    const event = { target: { value: 'test' } };
    component.clean(event);

    expect(component.inputConfiguration.control.reset).toHaveBeenCalled();
    expect(component.valueChange.emit).toHaveBeenCalledWith('test');
  });
});
