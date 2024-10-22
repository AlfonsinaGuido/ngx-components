import { IActionConfig, IIcon } from '../../public-api';

export interface IActionMenuConfig {
  actions: IActionConfig[];
  isOpen: boolean;
  twClass?: string;
  icons?: IIcon[];
}

export interface IActionMenuEvents {
  onActionSelected: (actionCode: string) => void;
  onMenuClosed: () => void;
}
