import {
  Duracion,
  EstadoActividad,
  IEvaluacion,
  Prioridad,
} from '../../public-api';

export interface IActividad {
  id: string | number;
  prerequisitos?: IActividad[];
  descripcion?: string;
  duracion: number;
  evaluaciones?: IEvaluacion[];
  fase: string;
  objetivos: string;
  prioridad: Prioridad;
  realizaEvaluacion: boolean;
  responsable: string;
  status: EstadoActividad;
  tipo: string;
  tipoDuracion: Duracion;
  titulo: string;
  fechaFin: Date;
}
