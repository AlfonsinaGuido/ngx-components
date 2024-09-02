import { IIcon } from '../../public-api';

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'warning';

export interface IButton {
  theme?: ButtonTheme;
  label: string;
  icon?: IIcon;
  disabled?: boolean;
  isFlat?: boolean;
  isFluid?: boolean;
  withoutBorder?: boolean;
  twClass?: string;
  url?: string;
  avatarName?: string;
  avatarImgUrl?: string;
  onClick?: IButtonAction;
}

export interface IButtonAction {
  action: (param?: any) => any | void | {};
}
