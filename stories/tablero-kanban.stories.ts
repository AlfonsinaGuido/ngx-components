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

/**
 * Arrow Function que permite validar la actividad que quiere ingresar a una columna
 * @param item Actividad seleccionada en el tablero
 * @param tipoColumna Estado de la columna
 * @returns valor booleano que indica si pueda ingresar o no a la columna
 */
const validarEstado = (
  item: IActividad,
  tipoColumna: EstadoActividad,
): boolean => {
  const estado = item.EstadoDb;
  let resultado: boolean;
  switch (tipoColumna) {
    case EstadoActividad.EnProceso:
      resultado = estado === EstadoActividad.Pendiente;
      break;
    case EstadoActividad.Finalizada:
      resultado = estado === EstadoActividad.EnProceso;
      break;
    default:
      resultado = false;
      break;
  }
  return resultado;
};

const estadosMap = {
  [EstadoActividad.Pendiente]: {
    id: 1,
    nombre: 'abiertas',
    validacion: { action: validarEstado, estado: EstadoActividad.Pendiente },
  },
  [EstadoActividad.EnProceso]: {
    id: 2,
    nombre: 'en progreso',
    validacion: { action: validarEstado, estado: EstadoActividad.EnProceso },
  },
  [EstadoActividad.Finalizada]: {
    id: 3,
    nombre: 'finalizadas',
    validacion: { action: validarEstado, estado: EstadoActividad.Finalizada },
  },
};

const columns: IColumna[] = Object.values(
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
    columns,
  },
};
