import {
  Duracion,
  EstadoActividad,
  IEvaluacion,
  IPrioridad,
  EtapaPrograma,
  IActividadPrograma,
  IEtapa,
  IEmpleoResponsable,
  ITipoActividad,
} from '../../public-api';

export interface IActividad {
  Codigo: number;
  Prerequisitos?: IActividad[]; //?
  Descripcion?: string; // -
  Duracion: number; // -
  Evaluaciones?: IEvaluacion[]; //-
  Etapa: IEtapa;
  Objetivo?: string;
  ResultadoEvaluacion?: string;
  RealizaEvaluacion?: boolean;
  EmpleoResponsable?: IEmpleoResponsable;
  EstadoDb: EstadoActividad;
  Tipo: ITipoActividad;
  UnidadDuracionDb: Duracion;
  Nombre: string;
  FechaFin: Date;
  Prioridad?: IPrioridad;
}
