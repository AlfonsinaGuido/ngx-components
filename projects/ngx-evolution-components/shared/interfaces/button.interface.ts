import { IconInterface } from '../../public-api';

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'warning';

export interface ButtonInterface {
  theme?: ButtonTheme;
  label: string;
  icon?: IconInterface;
  isFlat?: boolean;
  isFluid?: boolean;
  onClick?: (param?: any) => any | void | {};
}
