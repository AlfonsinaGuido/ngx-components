import { IButton } from '../../public-api';

export interface ITimeSegmentedList extends IButton {
  date: string;
}

export interface IListTitles {
  today: string;
  thisWeek: string;
  previous: string;
}
