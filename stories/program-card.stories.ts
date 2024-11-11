import {
  Meta,
  StoryObj,
  applicationConfig,
  moduleMetadata,
} from '@storybook/angular';
import { ProgramCardComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

type Story = StoryObj<ProgramCardComponent>;

const defaultconfig = {
  codigo: '1',
  nombre: 'Program Title',
  descripcion:
    'Se permite texto hasta dos líneas. Se permite texto hasta dos líneas. Se permite texto hasta dos líneas.',
  totalActividades: 5,
  activitiesText: 'Actividades',
  duracion: 3,
  unidadDuracionDb: 'Semanas',
  buttonLabel: 'Asignar',
  buttonIcon: 'add-user.svg',
  buttonClasses: 'theme-primary',
  totalParticipantes: 2,
  participantesText: 'participantes',
  onButtonClick: {
    action: () => {
      console.log('Button clicked!');
    },
  },
  twClass: 'custom-class',
  isFluid: true,
  size: 'lg' as 'sm' | 'md' | 'lg',
};

export default {
  title: 'Evolution Components/Program Card',
  component: ProgramCardComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuración de la tarjeta de programa',
      defaultValue: defaultconfig,
      table: {
        type: { summary: 'IProgramCardConfigInterface' },
      },
    },
  },
} as Meta<ProgramCardComponent>;

export const Default: Story = {
  args: {
    config: {
      ...defaultconfig,
    },
  },
};

export const Small: Story = {
  args: {
    config: {
      ...defaultconfig,
      size: 'sm',
      nombre: 'Onboarding General para Todos los Empleados',
      descripcion:
        'Se permite texto hasta dos líneas. Se permite texto hasta dos líneas.',
      isFluid: false,
    },
  },
};

export const Medium: Story = {
  args: {
    config: {
      ...defaultconfig,
      size: 'md',
      nombre: 'Medium Program Title',
      isFluid: false,
    },
  },
};

export const Large: Story = {
  args: {
    config: {
      ...defaultconfig,
      size: 'lg',
      nombre: 'Large Program Title',
      isFluid: false,
    },
  },
};
