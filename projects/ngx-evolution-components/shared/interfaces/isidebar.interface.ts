import { IIcon } from '../../public-api';

export interface ISidebarOption {
  icon: IIcon;
  action: () => void;
  route: string;
  title: string;
}
