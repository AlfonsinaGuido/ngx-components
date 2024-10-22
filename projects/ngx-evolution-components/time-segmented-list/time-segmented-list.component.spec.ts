import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeSegmentedListComponent } from './time-segmented-list.component';
import { SimpleChanges } from '@angular/core';
import { ITimeSegmentedList } from '../public-api';

describe('TimeSegmentedListComponent', () => {
  let component: TimeSegmentedListComponent;
  let fixture: ComponentFixture<TimeSegmentedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSegmentedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeSegmentedListComponent);
    component = fixture.componentInstance;
    component.titles = {
      today: '',
      thisWeek: '',
      previous: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should classify items by date when items input changes, ngOnChanges(changes: SimpleChanges): void', () => {
    const today = new Date();
    const thisWeek = new Date();
    thisWeek.setDate(thisWeek.getDate() - 1);
    const previous = new Date();
    previous.setDate(previous.getDate() - 10);

    const items: ITimeSegmentedList[] = [
      { date: today.toISOString() },
      { date: thisWeek.toISOString() },
      { date: previous.toISOString() },
    ];

    component.items = items;

    const changes: SimpleChanges = {
      items: {
        currentValue: items,
        previousValue: [],
        firstChange: true,
        isFirstChange: () => true,
      },
    };

    component.ngOnChanges(changes);

    expect(component.todayItems.length).toBe(1); 
    expect(component.thisWeekItems.length).toBe(1);
    expect(component.previousItems.length).toBe(1); 
  });

  it('should display empty lists when there are no items, private groupItemsByDate(): void', () => {
    component.items = [];

    component.ngOnChanges({
      items: {
        currentValue: [],
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    });

    expect(component.todayItems.length).toBe(0);
    expect(component.thisWeekItems.length).toBe(0);
    expect(component.previousItems.length).toBe(0);
  });
});
