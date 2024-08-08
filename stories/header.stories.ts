import { HeaderComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const meta: Meta<HeaderComponent> = {
  title: 'Evolution Components/Header',
  component: HeaderComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
    menuIcon: {
      icon: 'menu.svg',
      type: 'svg',
    },
    closeMenuIcon: {
      icon: 'close.svg',
      type: 'svg',
    },
    menuTitle: 'Tus aplicaciones',
    menuItems: [
      {
        label: 'Evo Wave',
        icon: {
          icon: 'company-logo.svg',
          type: 'svg',
          position: 'left',
        },
      },
      {
        label: 'Evo Chart',
        icon: {
          icon: 'company-logo.svg',
          type: 'svg',
          position: 'left',
        },
      },
    ],
    companyImage: 'company-logo.svg',
    notificationIcon: {
      icon: 'bell.svg',
      type: 'svg',
    },
    box: [
      {
        label: 'Cambiar Perfil',
        action: () => {
          console.log('funciona')
        }
      },
    ],
  },
};

export const WithCompanyName: Story = {
  args: {
    ...Default.args,
    companyName: 'ASEINFO',
  },
};
