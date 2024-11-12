import { Meta, StoryObj } from '@storybook/angular';
import {
  TableroKanbanComponent,
  IColumna,
  EstadoActividad,
  IActividad,
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

const validarPendiente = (item: IActividad): boolean => {
  return false;
};

const validarEnEjecucion = (item: IActividad): boolean => {
  const estado = item.EstadoDb;

  if (estado === EstadoActividad.Pendiente) {
    return true;
  }
  return false;
};

const validarFinalizado = (item: IActividad): boolean => {
  const estado = item.EstadoDb;

  if (estado === EstadoActividad.EnProceso) {
    return true;
  }

  return false;
};

const estadosMap = {
  [EstadoActividad.Pendiente]: {
    id: 1,
    nombre: 'abiertas',
    validacion: { action: validarPendiente },
  },
  [EstadoActividad.EnProceso]: {
    id: 2,
    nombre: 'en progreso',
    validacion: { action: validarEnEjecucion },
  },
  [EstadoActividad.Finalizada]: {
    id: 3,
    nombre: 'finalizadas',
    validacion: { action: validarFinalizado },
  },
};

const columnas: IColumna[] = Object.values(
  actividades.reduce((acc: any, act) => {
    const estadoConfig = estadosMap[act.EstadoDb];
    if (!estadoConfig) return acc;

    if (!acc[act.EstadoDb]) {
      acc[act.EstadoDb] = { ...estadoConfig, actividades: [] };
    }

    acc[act.EstadoDb].actividades.push(act);

    return acc;
  }, {}),
);

export const Default: Story = {
  args: {
    columnas,
  },
};
