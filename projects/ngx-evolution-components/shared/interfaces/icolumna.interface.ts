import { IActividad } from '../../public-api';

export interface IColumna {
  id: string | number;
  nombre: string;
  actividades: IActividad[];
}
