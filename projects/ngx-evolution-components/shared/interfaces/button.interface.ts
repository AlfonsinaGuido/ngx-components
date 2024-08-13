import { IconInterface } from '../../public-api';

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'warning';

export interface ButtonInterface {
  theme?: ButtonTheme;
  label: string;
  icon?: IconInterface;
  disabled?: boolean;
  isFlat?: boolean;
  isFluid?: boolean;
  withoutBorder?: boolean;
  classes?: string;
  url?: string;
  avatarName?: string;
  avatarImgUrl?: string;
  onClick?: ButtonActionInterface;
}

export interface ButtonActionInterface {
  action: (param?: any) => any | void | {};
}

export interface ButtonActionInterface {
  action: (param?: any) => any | void | {};
}
