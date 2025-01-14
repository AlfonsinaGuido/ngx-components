import {
  applicationConfig,
  Meta,
  StoryObj,
  moduleMetadata,
} from '@storybook/angular';
import {
  Orientation,
  StepperComponent,
} from '@aseinfo/ngx-evolution-components/public-api';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

type Story = StoryObj<StepperComponent>;

const defaultConfig = {
  steps: [
    { title: 'Paso 1', text: 'Este es el paso 1' },
    { title: 'Paso 2', text: 'Este es el paso 2' },
    { title: 'Paso 3', text: 'Este es el paso 3' },
  ],
  selectedStepIndex: 0,
  canContinue: true,
  continueButtonText: 'Siguiente',
  backButtonText: 'Atrás',
  twClass: '',
  highestCompletedIndex: 0,
  orientation: Orientation.Vertical,
};

export default {
  title: 'Evolution Components/Stepper',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
    applicationConfig({
      providers: [provideAnimationsAsync(), provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    stepperConfig: {
      control: 'object',
      description: 'Configuration object for the stepper',
      defaultValue: defaultConfig,
      table: {
        type: { summary: 'StepperConfig' },
      },
    },
  },
} as Meta<StepperComponent>;

export const Default: Story = {
  args: {
    stepperConfig: { ...defaultConfig },
  },
};

export const Horizontal: Story = {
  args: {
    stepperConfig: { ...defaultConfig, orientation: Orientation.Horizontal },
  },
};

export const WithContinueDisabled: Story = {
  args: {
    stepperConfig: { ...defaultConfig, canContinue: false },
  },
};
