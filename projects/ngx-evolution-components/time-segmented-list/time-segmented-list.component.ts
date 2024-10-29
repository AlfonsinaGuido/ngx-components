import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {
  ButtonComponent,
  DateUtils,
  IListTitles,
  ITimeSegmentedList,
} from '../public-api';

@Component({
  selector: 'evo-time-segmented-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './time-segmented-list.component.html',
  styleUrls: ['./time-segmented-list.component.scss', '../styles/output.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TimeSegmentedListComponent implements OnChanges {
  @Input() titles!: IListTitles;
  @Input() items!: ITimeSegmentedList[];
  @Input() emptyListMessage!: string;
  @Input() twClass?: string;

  public todayItems: ITimeSegmentedList[] = [];
  public thisWeekItems: ITimeSegmentedList[] = [];
  public previousItems: ITimeSegmentedList[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.groupItemsByDate();
    }
  }

  /**
   * Método para clasificar los items según la fecha
   */
  private groupItemsByDate(): void {
    this.todayItems = [];
    this.thisWeekItems = [];
    this.previousItems = [];

    this.items.forEach((item) => {
      if (this.isToday(item.date)) {
        this.todayItems.push(item);
      } else if (this.isThisWeek(item.date)) {
        this.thisWeekItems.push(item);
      } else if (this.isPrevious(item.date)) {
        this.previousItems.push(item);
      }
    });
  }

  private isToday(date: string): boolean {
    return DateUtils.isToday(date);
  }

  private isThisWeek(date: string): boolean {
    return DateUtils.isThisWeek(date);
  }

  private isPrevious(date: string): boolean {
    return DateUtils.isPrevious(date);
  }
}
