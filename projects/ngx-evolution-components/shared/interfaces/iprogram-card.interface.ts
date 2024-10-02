import { IButtonAction, IIcon } from '../../public-api';

export interface IProgramCardInterface {
  title: string;
  subtitle?: string;
  activitiesCount?: number;
  activitiesText?: string;
  weeksCount?: number;
  weeksText?: string;
  assignIcon?: IIcon;
  buttonLabel?: string;
  buttonIcon?: string;
  buttonClasses?: string;
  onButtonClick?: IButtonAction;
  twClass?: string;
  isFluid?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
