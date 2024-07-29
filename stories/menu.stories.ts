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
    titleApps: 'Tus aplicaciones',
    items: [
      {
        label: 'Evo Wave',
        icon: {
          icon: 'https://pic.onlinewebfonts.com/thumbnails/icons_428993.svg',
          type: 'svg',
          position: 'left',
        },
      },
      {
        label: 'Evo Chart',
        icon: {
          icon: 'https://pic.onlinewebfonts.com/thumbnails/icons_572317.svg',
          type: 'svg',
          position: 'left',
        },
      },
    ],
  },
};
