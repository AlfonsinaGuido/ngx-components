import { Form, FormGroup } from '@angular/forms';
import { IInput, MatNativeControlInputType } from './iinput.interface';
import { IValueList } from './api/ivalue-list.interface';

export type InputType =
  | 'autocomplete'
  | 'searchBar'
  | 'select'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type InputFilterType = InputType & MatNativeControlInputType;

export interface IFilterResponse {
  id: string;
  content: any;
}

export interface IFilter {
  fields: IField[];
}

interface IField extends IInput {
  id: string;
  fieldType: InputType;
  items?: IValueList[];
}
