import { FormControl } from '@angular/forms';

export type MatNativeControlInputType =
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

export interface IInput {
  control: FormControl;
  label?: string;
  inputType?: MatNativeControlInputType;
  inputPlaceholder?: string;
  requiredErrorMessage?: string;
  emailErrorMessage?: string;
  patternErrorMessage?: string;
  anotherErrorMessage?: string;
  detail?: string;
  twClass?: string;
}
