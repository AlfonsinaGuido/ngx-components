import { CartaActividadComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { Duracion } from '@aseinfo/ngx-evolution-components/enums/duracion.enum';
import { EstadoActividad } from '@aseinfo/ngx-evolution-components/enums/estado.enum';
import { IActividad } from '@aseinfo/ngx-evolution-components/shared/interfaces/actividad.interface';
import { Meta, StoryObj } from '@storybook/angular';
import { Prioridad } from '@aseinfo/ngx-evolution-components/enums/prioridad.enum';

export default {
  component: CartaActividadComponent,
  title: 'Evolution Components/Kanban/Carta Actividad',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
} as Meta<CartaActividadComponent>;

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
  fechaFin: '20/08/2024',
};

export const Default = {
  argTypes: {
    priority: {
      control: { type: 'select' },
      options: ['Alta', 'Media', 'Baja'],
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
