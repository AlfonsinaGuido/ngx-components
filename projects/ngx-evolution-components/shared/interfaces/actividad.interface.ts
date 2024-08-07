import { Duracion } from '@aseinfo/ngx-evolution-components/enums/duracion.enum';
import { Prioridad } from '@aseinfo/ngx-evolution-components/enums/prioridad.enum';
import { IEvaluacion } from './evaluacion.interface';
import { EstadoActividad } from '@aseinfo/ngx-evolution-components/enums/estado.enum';

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
