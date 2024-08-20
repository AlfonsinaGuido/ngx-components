import { Meta, StoryObj } from '@storybook/angular';
import { HeaderColumnaComponent } from '@aseinfo/ngx-evolution-components/public-api';

type Story = StoryObj<HeaderColumnaComponent>;
export default {
  component: HeaderColumnaComponent,
  title: 'Evolution Components/Kanban/Header Columna',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<HeaderColumnaComponent>;

export const Default: Story = {
  args: {
    name: 'Abiertas',
    count: 3,
    index: 0,
  },
};

export const muchasActividades: Story = {
  args: {
    name: 'En Progreso',
    count: 10000,
    index: 1,
  },
};

export const nombreColumnaLargo: Story = {
  args: {
    name: 'Las actividades que aún no hemos empezado pero tenemos que empezar muy pronto de lo contrario nos quedaremos sin tiempo',
    count: 25,
    index: 2,
  },
};

export const customTailwindClass: Story = {
  args: {
    name: 'Canceladas',
    count: 2,
    index: 4,
    twClass: 'bg-red-500 text-red-500',
  },
};

export const withoutCount: Story = {
  args: {
    name: 'Desasignadas',
    count: 0,
    index: 1,
    withCount: false,
  },
};
