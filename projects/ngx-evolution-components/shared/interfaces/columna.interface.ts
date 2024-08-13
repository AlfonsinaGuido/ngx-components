import { IActividad } from './actividad.interface';

export interface IColumna {
  id: string | number;
  nombre: string;
  actividades: IActividad[];
}
