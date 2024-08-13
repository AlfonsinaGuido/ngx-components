import { Meta, StoryObj } from '@storybook/angular';
import { Prioridad, TagComponent } from '@aseinfo/ngx-evolution-components/public-api';

type Story = StoryObj<TagComponent>;
export default {
  component: TagComponent,
  title: 'Evolution Components/Tag Prioridad',
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      control: { type: 'text' },
    },
    prioridad: {
      type: 'string',
      control: { type: 'inline-radio' },
      options: [Prioridad.High, Prioridad.Medium, Prioridad.Low],
    },
    size: {
      type: 'string',
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    twClass: {
      type: 'string',
      control: { type: 'text' },
    },
  },
  args: {
    label: 'tag',
  },
} as Meta<TagComponent>;

export const prioridadBaja: Story = {
  args: {
    label: 'Baja',
    prioridad: Prioridad.Low,
    size: 'sm',
  },
};

export const prioridadMedia: Story = {
  args: {
    label: 'Media',
    prioridad: Prioridad.Medium,
    size: 'md',
  },
};

export const prioridadAlta: Story = {
  args: {
    label: 'Alta',
    prioridad: Prioridad.High,
    size: 'lg',
  },
};

export const colorPersonalizado: Story = {
  args: {
    label: 'Custom',
    size: 'md',
    twClass: 'bg-green-50 text-green-700',
  },
};
