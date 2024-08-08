import { MenuComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const meta: Meta<MenuComponent> = {
  title: 'Evolution Components/Menu',
  component: MenuComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {
  args: {
    buttonIcon: {
      icon: 'menu.svg',
      type: 'svg',
    },
    closeIcon: {
      icon: 'close.svg',
      type: 'svg',
    },
    appTitle: 'Tus aplicaciones',
    items: [
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
  },
};
