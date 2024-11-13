import { EstadoActividad, IActividad } from '../../public-api';

export interface IColumna {
  id: string | number;
  nombre: string;
  actividades: IActividad[];
  validacion?: IValidationAction;
}

export interface IValidationAction {
  action: (element: IActividad, tipoColumna: EstadoActividad) => boolean;
  estado: EstadoActividad;
}
