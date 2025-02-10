import { IEmpleo } from '../../../public-api';
export interface IEmpleado {
  Nombre: string;
  Email: string;
  Codigo: number;
  Empleos: IEmpleo[];
}
