import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { provideHttpClient } from '@angular/common/http';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<LoginComponent> = {
  title: 'Evolution Components/Login',
  component: LoginComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync(), provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LoginComponent>;

const loginFunction = (): void => {
  alert('Logueado');
};

export const SimpleContent: Story = {
  args: {
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa a tu cuenta para acceder a la aplicación',
    svg: {
      icon: 'company-logo.svg',
      type: 'svg',
    },
    button: {
      label: 'Ingresar',
      theme: 'primary',
      onClick: {
        action: loginFunction,
      },
    },
  },
};

export const NoIcon: Story = {
  args: {
    title: 'Iniciar Sesión',
    subtitle: 'Ingresa a tu cuenta para acceder a la aplicación',
    button: {
      label: 'Ingresar',
      theme: 'primary',
      onClick: {
        action: loginFunction,
      },
    },
  },
};

export const NoSubtitle: Story = {
  args: {
    title: 'Iniciar Sesión',
    button: {
      label: 'Ingresar',
      theme: 'primary',
      onClick: {
        action: loginFunction,
      },
    },
  },
};
