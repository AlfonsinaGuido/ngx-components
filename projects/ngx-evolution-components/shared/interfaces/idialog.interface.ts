import { IButton, IIcon } from '../../public-api';

export interface IDialog {
  title: string;
  scrollableContent?: string;
  simpleContent?: string;
  buttonsItems?: IButton[];
  icon?: IIcon;
  closeButton?: boolean;
  disableClosing?: boolean;
}
