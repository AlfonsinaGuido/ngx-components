import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import {
  SidebarComponent,
  IHeaderIcons,
  IHeaderTitles,
  IHeaderButtonItems,
  IHeaderCompanyData,
  IHeader,
  ISidebarOption,
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
  },
  args: {
    commonProps: {
      icons: {
        appIcon: { icon: 'app-menu.svg', type: 'svg' },
        notificationIcon: { icon: 'bell.svg', type: 'svg' },
        closeMenuIcon: { icon: 'close.svg', type: 'svg' },
      } as IHeaderIcons,
      titles: {
        appTitle: 'Tus aplicaciones',
        notificationTitle: 'Notificaciones',
      } as IHeaderTitles,
      buttonItems: {
        appItems: [
          {
            label: 'Evo Wave',
            icon: {
              icon: 'company-logo.svg',
              type: 'svg',
              position: 'left',
            },
            url: 'https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoWave',
          },
          {
            label: 'Evo Chart',
            icon: {
              icon: 'company-logo.svg',
              type: 'svg',
              position: 'left',
            },
            url: 'https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoChart',
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
      } as IHeaderButtonItems,
      companyData: {
        companyImage: 'company-logo.svg',
        companyName: 'ASEINFO',
      } as IHeaderCompanyData,
      userData: {
        fullName: 'Stela Lopez',
        email: 'slopez@empresa.com',
        position: 'Gerente Desarrollo',
      },
    } as IHeader,
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
    ] as ISidebarOption[],
    additionalOptions: [
      {
        icon: { icon: 'company-logo.svg', type: 'svg' },
        action: () => alert('Dashboard'),
        route: '/dashboard',
        title: 'Dashboard',
      },
    ] as ISidebarOption[],
  },
};

export default meta;

type Story = StoryObj<SidebarComponent>;

export const Default: Story = {};
