import { Meta, StoryObj } from '@storybook/angular';
import {
  TableroKanbanComponent,
  IActividad,
  IColumna,
} from '@aseinfo/ngx-evolution-components/public-api';
import { Prioridad } from '@aseinfo/ngx-evolution-components/enums/prioridad.enum';
import { Duracion } from '@aseinfo/ngx-evolution-components/enums/duracion.enum';
import { EstadoActividad } from '@aseinfo/ngx-evolution-components/enums/estado.enum';

type Story = StoryObj<TableroKanbanComponent>;
export default {
  component: TableroKanbanComponent,
  title: 'Evolution Components/Kanban/Tablero',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<TableroKanbanComponent>;

const actividades: IActividad[] = [
  {
    id: 1,
    titulo: 'Inducción a la empresa',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion:
      'Día de inducción a la empresa. Es necesario asistir presencialmente.',
    objetivos:
      'Procurar que el empleado pueda asociarse con los valores de la empresa',
    prioridad: Prioridad.High,
    responsable: 'Miguel Perez',
    duracion: 8,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Abierta,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 2,
    titulo: 'Curso de Evolution',
    tipo: 'Capacitación',
    fase: 'La primera semana',
    descripcion:
      'Curso de una semana para el aprendizaje básico del sistema Evolution.',
    objetivos:
      'El participante debe llegar a familiarizarse con todos los módulos de Evolution.',
    prioridad: Prioridad.Medium,
    responsable: 'Ricardo Hernandez',
    duracion: 5,
    tipoDuracion: Duracion.Dias,
    realizaEvaluacion: true,
    status: EstadoActividad.EnProgreso,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 3,
    titulo: 'Visita Guiada',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion: 'Realizar una visita guiada sobre las instalaciones.',
    objetivos: 'Asignar parqueo y conocer el edificio.',
    prioridad: Prioridad.Low,
    responsable: 'Hugo Maldonado',
    duracion: 2,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Cerrada,
    fechaFin: new Date(2024, 7, 20),
  },
  {
    id: 4,
    titulo: 'Revisión de documentos',
    tipo: 'Revisión',
    fase: 'La primera semana',
    descripcion: 'Revisión de documentos y firma de contrato.',
    objetivos: 'Asegurar que todos los documentos estén en orden.',
    prioridad: Prioridad.High,
    responsable: 'Miguel Perez',
    duracion: 2,
    tipoDuracion: Duracion.Horas,
    realizaEvaluacion: false,
    status: EstadoActividad.Abierta,
    fechaFin: new Date(2024, 7, 20),
  },
];

const columnas: IColumna[] = [
  {
    id: 1,
    nombre: 'abiertas',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.Abierta,
    ),
  },
  {
    id: 2,
    nombre: 'en progreso',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.EnProgreso,
    ),
  },
  {
    id: 3,
    nombre: 'finalizadas',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.Cerrada,
    ),
  },
];

export const Default: Story = {
  args: {
    columnas,
  },
};
