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
}
