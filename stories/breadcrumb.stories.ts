import { BreadcrumbComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BreadcrumbComponent> = {
  title: 'Evolution Components/Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([], withDisabledInitialNavigation()),
        provideHttpClient(),
      ],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BreadcrumbComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    twClass: '',
    homeElement: {
      path: '/dashboard',
      icon: 'home.svg',
    },
    breadcrumbs: [
      {
        label: 'Notificaciones',
        url: '/notificaciones',
      },
      {
        label: 'Ver-detalles',
        url: '/ver-detalles',
      },
    ],
  },
};

export const WithoutHomePath: Story = {
  args: {
    ...Default.args,
    homeElement: undefined,
  },
};

export const Hidden: Story = {
  args: {
    breadcrumbs: [
      {
        label: 'Notificaciones',
        url: '/notificaciones',
      },
    ],
  },
};
