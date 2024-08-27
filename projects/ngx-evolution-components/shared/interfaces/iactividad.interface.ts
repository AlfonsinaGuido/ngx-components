import {
  Duracion,
  EstadoActividad,
  IEvaluacion,
  IPrioridad,
  EtapaPrograma,
} from '../../public-api';

export interface IActividad {
  id: number;
  prerequisitos?: IActividad[];
  descripcion?: string;
  duracion: number;
  evaluaciones?: IEvaluacion[];
  etapa: EtapaPrograma;
  objetivos: string;
  realizaEvaluacion: boolean;
  responsable: string;
  status: EstadoActividad;
  tipo: string;
  tipoDuracion: Duracion;
  nombre: string;
  fechaFin: Date;
  prioridad?: IPrioridad;
}
