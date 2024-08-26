import { Meta, StoryObj } from '@storybook/angular';
import { ColumnaTableroComponent } from '@aseinfo/ngx-evolution-components/public-api';

type Story = StoryObj<ColumnaTableroComponent>;
export default {
  component: ColumnaTableroComponent,
  title: 'Evolution Components/Kanban/Columna Tablero',
  tags: ['autodocs'],
} as Meta<ColumnaTableroComponent>;
import { actividades } from './data/kanban/actividades.data';

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
