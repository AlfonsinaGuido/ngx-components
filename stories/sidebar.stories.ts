import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import {
  SidebarComponent,
  IHeaderIcons,
  IHeaderTitles,
  IHeaderItems,
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
        appMenuIcons: {
          buttonIcon: {
            icon: 'app-menu.svg',
            type: 'svg',
          },
        },
        authorizationMenuIcons: {
          buttonIcon: {
            icon: 'fact_check',
            type: 'class',
          },
        },
        notificationMenuIcons: {
          buttonIcon: {
            icon: 'bell.svg',
            type: 'svg',
          },
        },
        settingMenuIcons: {
          buttonIcon: {
            icon: 'settings.svg',
            type: 'svg',
          },
        },
      } as IHeaderIcons,
      titles: {
        appTitle: 'Tus aplicaciones',
        authorizationTitle: 'Autorizaciones',
        notificationTitle: 'Notificaciones',
        settingTitle: 'Ajustes',
      } as IHeaderTitles,
      items: {
        appItems: [
          {
            label: 'Evo Wave',
            icon: {
              icon: 'company-logo.svg',
              type: 'svg',
            },
            url: 'https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoWave',
          },
          {
            label: 'Evo Chart',
            icon: {
              icon: 'company-logo.svg',
              type: 'svg',
            },
            url: 'https://servidorinvestigacion.eastus.cloudapp.azure.com/EvoChart',
          },
        ],
        authorizationItems: [
          {
            label:
              'Carlos Sanchez requiere autorización de acceso al Programa Recursos Humanos',
            avatarName: 'Carlos Sanchez',
            avatarImgUrl:
              'https://material.angular.io/assets/img/examples/shiba1.jpg',
            onClick: {
              action: (name = 'Carlos Sanchez') => {
                alert('Se autorizó a ' + name);
              },
            },
          },
          {
            label:
              'Samuel Lopez requiere autorización de acceso al Programa Desarrollo',
            avatarName: 'Samuel Lopez',
            avatarImgUrl:
              'https://material.angular.io/assets/img/examples/shiba1.jpg',
            onClick: {
              action: () => {
                alert('Se autorizó a Samuel Lopez');
              },
            },
          },
          {
            label:
              'Ignacio Fernandez requiere autorización de acceso al Programa Recursos Humanos',
            avatarName: 'Ignacio Fernandez',
            avatarImgUrl:
              'https://material.angular.io/assets/img/examples/shiba1.jpg',
            onClick: {
              action: (name = 'Ignacio Fernandez') => {
                alert('Se autorizó a ' + name);
              },
            },
          },
        ],
        notificationItems: [
          {
            label: 'Carlos Sanchez finalizó Programa Recursos Humanos',
            avatarName: 'Carlos Sanchez',
            avatarImgUrl:
              'https://material.angular.io/assets/img/examples/shiba1.jpg',
            onClick: {
              action: (name = 'Carlos Sanchez') => {
                alert('Notificación de: ' + name);
              },
            },
          },
        ],
        seeAllButton: {
          seeAllAuthorizations: {
            label: 'Ver todas',
            withoutBorder: true,
            onClick: {
              action: (path = '/autorizaciones') => {
                alert('Redirige a pantalla: ' + path);
              },
            },
          },
          seeAllNotifications: {
            label: 'Ver todas',
            withoutBorder: true,
            onClick: {
              action: (path = '/notificaciones') => {
                alert('Redirige a pantalla: ' + path);
              },
            },
          },
        },
        settingMenu: {
          options: [
            {
              name: 'Apellido primero',
            },
            {
              name: 'Autorizaciones',
            },
          ],
        },
        userDataItems: [
          {
            label: 'Administrar Cuenta',
            icon: {
              icon: 'manage_accounts',
              type: 'class',
            },
            url: 'https://localhost:7002/identity/account/manage',
          },
          {
            label: 'Cerrar Sesión',
            onClick: {
              action: () => {
                alert('Se ejecuta Logout');
              },
            },
          },
        ],
      } as IHeaderItems,
      companyData: {
        companyImage: 'company-logo.svg',
        companyName: 'ASEINFO',
      } as IHeaderCompanyData,
      userData: {
        fullName: 'Stela Lopez',
        email: 'slopez@empresa.com',
        jobPositions: [
          {
            Puesto: {
              Nombre: 'Gerente Desarrollo',
            },
            Unidad: {
              Descripcion: 'Unidad',
            },
            Compania: {
              Descripcion: 'Compania',
            },
            CentroTrabajo: {
              Descripcion: 'Centro de Trabajo',
            },
          },
          {
            Puesto: {
              Nombre: 'Gerente Calidad',
            },
            Unidad: {
              Descripcion: 'Unidad',
            },
            Compania: {
              Descripcion: 'Compania',
            },
            CentroTrabajo: {
              Descripcion: 'Centro de Trabajo',
            },
            onClick: {
              action: (position = 'Gerente Calidad') => {
                alert('Puesto elegido: ' + position);
              },
            },
          },
        ],
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
