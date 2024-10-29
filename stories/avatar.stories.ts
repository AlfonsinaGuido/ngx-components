import { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from '@aseinfo/ngx-evolution-components/public-api';

type Story = StoryObj<AvatarComponent>;
export default {
  component: AvatarComponent,
  title: 'Evolution Components/Avatar',
  tags: ['autodocs'],
  argTypes: {
    name: {
      type: 'string',
      description: 'Nombre del empleado',
    },
    size: {
      type: 'string',
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    imgUrl: {
      type: 'string',
      description:
        'Url de la imagen del empleado. Si no se provee, se usarán iniciales',
    },
    isPriority: {
      type: 'boolean',
      description:
        'Se usa para cargar la imagen de manera diferida cuando no es prioridad. Caso contrario, la carga de img será inmediata.',
    },
    color: {
      type: 'string',
      options: [
        'red',
        'purple',
        'blue',
        'green',
        'gray',
        'stone',
        'pink',
        'yellow',
        'orange',
      ],
      control: { type: 'select' },
      description: 'Colores disponbiles (de tailwind) para seleccionar',
    },
  },
  args: {
    size: 'md',
    name: 'Doge Le Grande',
  },
} as Meta<AvatarComponent>;

export const fotoDePerfil: Story = {
  args: {
    size: 'lg',
    isPriority: true,
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },
};

export const iniciales: Story = {
  args: {
    size: 'lg',
    name: 'Alfonso Gonzalez',
    color: 'green',
  },
};
