import { Meta, StoryObj } from '@storybook/angular';
import { TagComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { prioridadLowest } from '@aseinfo/ngx-evolution-components/shared/data/kanban/prioridades.data';

type Story = StoryObj<TagComponent>;
export default {
  component: TagComponent,
  title: 'Evolution Components/Tag Prioridad',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} as Meta<TagComponent>;

export const Default: Story = {
  args: {
    label: 'Tag',
    size: 'sm',
    twClass: '',
    prioridad: {
      Nombre: 'Alta',
      Color: '#FF0000',
      Codigo: 0,
      Orden: 0,
    },
  },
};

export const prioridadMasBaja: Story = {
  args: {
    label: 'Baja',
    size: 'sm',
    prioridad: prioridadLowest,
  },
};

export const prioridadMedia: Story = {
  args: {
    label: 'Media',
    size: 'md',
    twClass: 'bg-gray-300',
  },
};

export const prioridadAlta: Story = {
  args: {
    label: 'Alta',
    size: 'lg',
    twClass: 'bg-gray-300',
  },
};

export const conClasePersonalizada: Story = {
  args: {
    label: 'Custom',
    size: 'md',
    twClass:
      'bg-slate-600 text-white border-slate-700 font-bold cursor-pointer rounded-xl p-2',
  },
};
