import { IconInterface } from '../../public-api';

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'warning';

export interface ButtonInterface {
  theme?: ButtonTheme;
  label: string;
  icon?: IconInterface;
  disabled?: boolean;
  isFlat?: boolean;
  isFluid?: boolean;
  onClick?: ButtonActionInterface;
  withoutBorder?: boolean;
  classes?: string;
}

export interface ButtonActionInterface {
  action: (param?: any) => any | void | {};
}
