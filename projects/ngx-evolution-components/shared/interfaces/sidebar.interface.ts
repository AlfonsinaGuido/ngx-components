import { IconInterface } from '../../public-api';

export interface SidebarOptionInterface {
  icon: IconInterface;
  action: () => void;
  route: string;
  title: string;
}
