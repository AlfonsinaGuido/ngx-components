import { IIcon } from '../../public-api';

export type SlideColor = 'accent' | 'primary' | 'warn';
export type LabelPosition = 'before' | 'after';

export interface IMenuIcons {
  buttonIcon?: IIcon;
  closeIcon?: IIcon;
}

export interface ISettingMenu {
  color?: SlideColor;
  labelPosition?: LabelPosition;
  options: ISettingOptions[];
}

interface ISettingOptions {
  name: string;
  checked?: boolean;
  disabled?: boolean;
}
