import { IPlaza, IExpediente } from '../../../public-api';

export interface IEmpleo {
  Codigo: number;
  ExpedienteCodigo: number;
  Expediente: IExpediente;
  Plaza: IPlaza;
}
