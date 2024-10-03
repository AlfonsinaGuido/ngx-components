import { provideHttpClient } from '@angular/common/http';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import {
  CardComponent,
  ICardConfig,
} from '@aseinfo/ngx-evolution-components/public-api';

const defaultConfig: ICardConfig = {
  titlep1: 'Asignar a',
  titlep2: 'personas',
  items: [
    { id: '1', name: 'Oscar Esteban Juarez Paz' },
    { id: '2', name: 'Julia Maria Fernandez Paredes' },
    { id: '3', name: 'Isabella Maria Gonzales Clark' },
  ],
  buttonText: 'Asignar Programa',
  emptyStateText: 'No hay personas asignadas',
  twClass: '',
};

const meta: Meta<CardComponent> = {
  title: 'Evolution Components/Card',
  component: CardComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    config: {
      ...defaultConfig,
    },
  },
  parameters: {
    actions: {
      handles: ['removeItem', 'buttonClick'],
    },
  },
};

export const SmallSizeSmallOptions: Story = {
  args: {
    config: {
      ...defaultConfig,
      twClass: 'w-80', // Pasando el valor personalizado
    },
  },
  parameters: {
    actions: {
      handles: ['removeItem', 'buttonClick'],
    },
  },
};

export const SmallSize: Story = {
  args: {
    config: {
      ...defaultConfig,
      items: [
        ...defaultConfig.items,
        { id: '4', name: 'Oscar Esteban Juarez Paz' },
      ],
      twClass: 'w-80', // Pasando el valor personalizado
    },
  },
  parameters: {
    actions: {
      handles: ['removeItem', 'buttonClick'],
    },
  },
};
