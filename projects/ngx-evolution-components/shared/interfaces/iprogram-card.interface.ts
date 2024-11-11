import { IButtonAction, IIcon } from '../../public-api';

export interface IProgramCardConfigInterface {
  codigo: string;
  nombre: string;
  descripcion?: string;
  totalActividades?: number;
  activitiesText?: string;
  duracion?: number;
  unidadDuracionDb?: string;
  totalParticipantes?: number;
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
