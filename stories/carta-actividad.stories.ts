import { CartaActividadComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { actividad1 as actividad } from './data/kanban/actividades.data';
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

export const Default = {
  argTypes: {
    twClass: {
      control: { type: 'text' },
    },
  },
  args: {
    actividad,
    endDate: actividad.fechaFin,
    tooltipSoonToExpire: 'Próxima a vencer',
    tooltipExpired: 'Vencida',
  },
} as StoryObj<CartaActividadComponent>;

export const porVencer = {
  args: {
    actividad,
    endDate: yesterday,
    tooltipSoonToExpire: 'Próxima a vencer',
  },
} as StoryObj<CartaActividadComponent>;

export const vencida = {
  args: {
    actividad,
    endDate: pastToday,
    tooltipExpired: 'Vencida',
  },
} as StoryObj<CartaActividadComponent>;

export const sinTagDePrioridad = {
  args: {
    actividad: {
      ...actividad,
      prioridad: undefined,
    },
    endDate: actividad.fechaFin,
  },
} as StoryObj<CartaActividadComponent>;

export const sinAvatar = {
  args: {
    actividad: {
      ...actividad,
      responsable: '',
    },
    endDate: actividad.fechaFin,
  },
} as StoryObj<CartaActividadComponent>;

export const sinFechaFin = {
  args: {
    actividad,
  },
} as StoryObj<CartaActividadComponent>;

export const sinFooter = {
  args: {
    actividad: {
      ...actividad,
      responsable: '',
    },
  },
} as StoryObj<CartaActividadComponent>;

export const soloTituloYDescripcion = {
  args: {
    actividad: {
      ...actividad,
      responsable: '',
      prioridad: undefined,
    },
  },
} as StoryObj<CartaActividadComponent>;
