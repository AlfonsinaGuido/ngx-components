import { IButtonAction, IIcon } from '../../public-api';

export interface IProgramCardConfigInterface {
  Codigo: string;
  Nombre: string;
  Descripcion?: string;
  TotalActividades?: number;
  activitiesText?: string;
  Duracion?: number;
  UnidadDuracionDb?: string;
  TotalParticipantes?: number;
  participantesText?: string;
  assignIcon?: IIcon;
  buttonLabel?: string;
  buttonIcon?: string;
  buttonClasses?: string;
  onButtonClick?: IButtonAction;
  twClass?: string;
  isFluid?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
