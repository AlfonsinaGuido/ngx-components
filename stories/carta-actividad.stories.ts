import {
  CartaActividadComponent,
  Duracion,
  EstadoActividad,
  IActividad,
  Prioridad,
} from '@aseinfo/ngx-evolution-components/public-api';
import { Meta, StoryObj } from '@storybook/angular';

export default {
  component: CartaActividadComponent,
  title: 'Evolution Components/Kanban/Carta Actividad',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
} as Meta<CartaActividadComponent>;

const today = new Date();
const yesterday = new Date(today.setDate(today.getDate() - 1));
const pastToday = new Date(today.setDate(today.getDate() + 5));

const actividad: IActividad = {
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
  fechaFin: new Date('08/20/2024'),
};

export const Default = {
  argTypes: {
    priority: {
      control: { type: 'select' },
      options: ['Alta', 'Media', 'Baja'],
    },
    twClass: {
      control: { type: 'text' },
    },
  },
  args: {
    title: actividad.titulo,
    description: actividad.descripcion,
    priority: actividad.prioridad,
    responsible: actividad.responsable,
    endDate: actividad.fechaFin,
  },
} as StoryObj<CartaActividadComponent>;

export const porVencer = {
  args: {
    title: actividad.titulo,
    description: actividad.descripcion,
    priority: actividad.prioridad,
    responsible: actividad.responsable,
    endDate: yesterday,
  },
} as StoryObj<CartaActividadComponent>;

export const vencida = {
  args: {
    title: actividad.titulo,
    description: actividad.descripcion,
    priority: actividad.prioridad,
    responsible: actividad.responsable,
    endDate: pastToday,
  },
} as StoryObj<CartaActividadComponent>;

export const sinTagDePrioridad = {
  args: {
    title: actividad.titulo,
    description: actividad.descripcion,
    responsible: actividad.responsable,
    endDate: actividad.fechaFin,
  },
} as StoryObj<CartaActividadComponent>;

export const sinAvatar = {
  args: {
    title: actividad.titulo,
    description: actividad.descripcion,
    priority: actividad.prioridad,
    endDate: actividad.fechaFin,
  },
} as StoryObj<CartaActividadComponent>;

export const sinFechaFin = {
  args: {
    title: actividad.titulo,
    description: actividad.descripcion,
    priority: actividad.prioridad,
    responsible: actividad.responsable,
  },
} as StoryObj<CartaActividadComponent>;

export const sinFooter = {
  args: {
    title: actividad.titulo,
    description: actividad.descripcion,
    priority: actividad.prioridad,
  },
} as StoryObj<CartaActividadComponent>;

export const soloTituloYDescripcion = {
  args: {
    title: actividad.titulo,
    description: actividad.descripcion,
  },
} as StoryObj<CartaActividadComponent>;
