import { Meta, StoryObj } from '@storybook/angular';
import {
  TableroKanbanComponent,
  IColumna,
  EstadoActividad,
} from '@aseinfo/ngx-evolution-components/public-api';
import { actividades } from '@aseinfo/ngx-evolution-components/shared/data/kanban/actividades.data';

type Story = StoryObj<TableroKanbanComponent>;
export default {
  component: TableroKanbanComponent,
  title: 'Evolution Components/Kanban/Tablero',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<TableroKanbanComponent>;

const columnas: IColumna[] = [
  {
    id: 1,
    nombre: 'abiertas',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.abierta,
    ),
  },
  {
    id: 2,
    nombre: 'en progreso',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.enProgreso,
    ),
  },
  {
    id: 3,
    nombre: 'finalizadas',
    actividades: actividades.filter(
      (act) => act.status === EstadoActividad.cerrada,
    ),
  },
];

export const Default: Story = {
  args: {
    columnas,
  },
};
