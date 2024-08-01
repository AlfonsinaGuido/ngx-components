import { Duracion } from '@aseinfo/ngx-evolution-components/enums/duracion.enum';
import { Prioridad } from '@aseinfo/ngx-evolution-components/enums/prioridad.enum';
import { IEvauacion } from './evaluacion.interface';
import { EstadoActividad } from '@aseinfo/ngx-evolution-components/enums/estado.enum';

export interface IActividad {
  titulo: string;
  tipo: string;
  fase: string;
  descripcion?: string;
  objetivos: string;
  prioridad: Prioridad;
  responsable: string;
  duracion: number;
  tipoDuracion: Duracion;
  realizaEvaluacion: boolean;
  evaluaciones?: IEvauacion[];
  Prerequisitos?: IActividad[];
  status: EstadoActividad;
}
