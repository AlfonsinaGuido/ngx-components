import { Meta, StoryObj } from '@storybook/angular';
import {
  ColumnaTableroComponent,
  Duracion,
  EstadoActividad,
  IActividad,
  Prioridad,
} from '@aseinfo/ngx-evolution-components/public-api';

type Story = StoryObj<ColumnaTableroComponent>;
export default {
  component: ColumnaTableroComponent,
  title: 'Evolution Components/Kanban/Columna Tablero',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<ColumnaTableroComponent>;

const actividades: IActividad[] = [
  {
    id: 1,
    titulo: 'Inducción a la empresa',
    tipo: 'Reunión',
    fase: 'Antes del primer día',
    descripcion:
      'Día de inducción a la empresa. Es necesario asistir presencialmente a las oficinas.',
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
    status: EstadoActividad.EnProgreso,
    fechaFin: new Date(2024, 7, 20),
  },
];

export const Default: Story = {
  args: {
    actividades: actividades,
  },
};

export const sinActividadeds: Story = {
  args: {
    actividades: [],
  },
};

export const nombreDeColumnaLargo: Story = {
  args: {
    actividades: actividades,
  },
};
