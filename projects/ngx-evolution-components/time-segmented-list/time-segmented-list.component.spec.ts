import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TimeSegmentedListComponent } from './time-segmented-list.component';
import { DebugElement, SimpleChanges } from '@angular/core';
import { ITimeSegmentedList } from '../public-api';
import { By } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

describe('TimeSegmentedListComponent', () => {
  let component: TimeSegmentedListComponent;
  let fixture: ComponentFixture<TimeSegmentedListComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSegmentedListComponent, MarkdownModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeSegmentedListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
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
    const previous = new Date();
    previous.setDate(previous.getDate() - 10);

    let items: ITimeSegmentedList[] = [
      { date: today.toISOString() },
      { date: previous.toISOString() },
    ];

    const isMonday: boolean = today.getDay() === 1;

    if (!isMonday) {
      const thisWeek = new Date();
      thisWeek.setDate(thisWeek.getDate() - 1);
      items = [...items, { date: thisWeek.toISOString() }];
    }

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
    expect(component.thisWeekItems.length).toBe(isMonday ? 0 : 1);
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

  it('should display correct titles', () => {
    const titles = debugElement.queryAll(By.css('h3'));
    expect(titles.length).toBe(3);
    expect(titles[0].nativeElement.textContent.trim()).toBe(
      component.titles.today,
    );
    expect(titles[1].nativeElement.textContent.trim()).toBe(
      component.titles.thisWeek,
    );
    expect(titles[2].nativeElement.textContent.trim()).toBe(
      component.titles.previous,
    );
  });

  it('should render todayItems list', waitForAsync(() => {
    component.todayItems = [
      {
        label: 'Item 1',
        onClick: { action: () => {} },
        avatarName: 'A',
        avatarImgUrl: 'url1',
        date: '',
      },
      {
        label: 'Item 2',
        onClick: { action: () => {} },
        avatarName: 'B',
        avatarImgUrl: 'url2',
        date: '',
      },
    ];
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const todayListItems = debugElement
        .queryAll(By.css('ul'))[0]
        .queryAll(By.css('li'));
      expect(todayListItems.length).toBe(2);
      expect(todayListItems[0].nativeElement.textContent.trim()).toContain(
        'Item 1',
      );
      expect(todayListItems[1].nativeElement.textContent.trim()).toContain(
        'Item 2',
      );
    });
  }));

  it('should show empty message for empty todayItems list', () => {
    component.todayItems = [];
    component.emptyListMessage = '';
    fixture.detectChanges();

    const emptyMessage = debugElement
      .queryAll(By.css('ul'))[0]
      .query(By.css('li')).nativeElement;
    expect(emptyMessage.textContent.trim()).toBe(component.emptyListMessage);
  });
});
