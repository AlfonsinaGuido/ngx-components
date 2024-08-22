import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import {
  SidebarComponent,
  HeaderIconsInterface,
  HeaderTitlesInterface,
  HeaderButtonItemsInterface,
  HeaderCompanyDataInterface,
  CommonHeaderSidebarInterface,
  SidebarOptionInterface,
} from '@aseinfo/ngx-evolution-components/public-api';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

const meta: Meta<SidebarComponent> = {
  title: 'Evolution Components/Sidebar',
  component: SidebarComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync(), provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    commonProps: {
      description: 'Propiedades comunes entre header y sidebar',
      control: {
        type: 'object',
      },
    },
    options: {
      description: 'Opciones del sidebar',
      control: {
        type: 'object',
      },
    },
    additionalOptions: {
      description: 'Opciones adicionales del sidebar',
      control: {
        type: 'object',
      },
    },
    avatarName: {
      type: 'string',
      description: 'Nombre del avatar',
    },
    avatarImgUrl: {
      type: 'string',
      description: 'URL de la imagen del avatar',
    },
    avatarIsPriority: {
      type: 'boolean',
      description: 'Si el avatar tiene prioridad',
    },
  },
  args: {
    commonProps: {
      icons: {
        appIcon: { icon: 'app-menu.svg', type: 'svg' },
        notificationIcon: { icon: 'bell.svg', type: 'svg' },
        closeMenuIcon: { icon: 'close.svg', type: 'svg' },
      } as HeaderIconsInterface,
      titles: {
        appTitle: 'Tus aplicaciones',
        notificationTitle: 'Notificaciones',
      } as HeaderTitlesInterface,
      buttonItems: {
        appItems: [
          {
            label: 'Evo Wave',
            icon: { icon: 'company-logo.svg', type: 'svg', position: 'left' },
          },
          {
            label: 'Evo Chart',
            icon: { icon: 'company-logo.svg', type: 'svg', position: 'left' },
          },
        ],
        notificationItems: [
          {
            label: 'Carlos Sanchez finalizo Programa Recursos Humanos',
            avatarName: 'Carlos Sanchez',
            avatarImgUrl:
              'https://material.angular.io/assets/img/examples/shiba1.jpg',
            onClick: {
              action: (param = ' con param') => {
                console.log('funciona' + param);
              },
            },
          },
        ],
        userDataItems: [
          {
            label: 'Cerrar Sesión',
            icon: { icon: 'logout.svg', type: 'svg', position: 'left' },
            onClick: {
              action: (param = ' con param') => {
                console.log('funciona' + param);
              },
            },
          },
        ],
      } as HeaderButtonItemsInterface,
      companyData: {
        companyImage: 'company-logo.svg',
        companyName: 'ASEINFO',
      } as HeaderCompanyDataInterface,
      userData: {
        fullName: 'Stela Lopez',
        email: 'slopez@empresa.com',
        position: 'Gerente Desarrollo',
      },
    } as CommonHeaderSidebarInterface,
    avatarName: 'Jonatan Elizalde Gómez',
    avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    options: [
      {
        icon: { icon: 'dashboard.svg', type: 'svg' },
        action: () => alert('Dashboard'),
        route: '/dashboard',
        title: 'Dashboard',
      },
      {
        icon: { icon: 'files.svg', type: 'svg' },
        action: () => alert('Files'),
        route: '/files',
        title: 'Files',
      },
      {
        icon: { icon: 'settings.svg', type: 'svg' },
        action: () => alert('Settings'),
        route: '/settings',
        title: 'Settings',
      },
    ] as SidebarOptionInterface[],
    additionalOptions: [
      {
        icon: { icon: 'dashboard.svg', type: 'svg' },
        action: () => alert('Dashboard'),
        route: '/dashboard',
        title: 'Dashboard',
      },
    ] as SidebarOptionInterface[],
  },
};

export default meta;

type Story = StoryObj<SidebarComponent>;

export const Default: Story = {};
