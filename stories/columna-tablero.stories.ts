import { Meta, StoryObj } from '@storybook/angular';
import { ColumnaTableroComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { actividades } from '@aseinfo/ngx-evolution-components/shared/data/kanban/actividades.data';

type Story = StoryObj<ColumnaTableroComponent>;
export default {
  component: ColumnaTableroComponent,
  title: 'Evolution Components/Kanban/Columna Tablero',
  tags: ['autodocs'],
} as Meta<ColumnaTableroComponent>;

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
