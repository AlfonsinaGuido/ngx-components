import { HeaderComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

const meta: Meta<HeaderComponent> = {
  title: 'Evolution Components/Header',
  component: HeaderComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync(), provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
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
    },
    titles: {
      appTitle: 'Tus aplicaciones',
      authorizationTitle: 'Autorizaciones',
      notificationTitle: 'Notificaciones',
      settingTitle: 'Ajustes',
    },
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
              alert('Notificación de ' + name);
            },
          },
        },
        {
          label: 'Samuel Lopez finalizó Programa Desarrollo',
          avatarName: 'Samuel Lopez',
          avatarImgUrl:
            'https://material.angular.io/assets/img/examples/shiba1.jpg',
          onClick: {
            action: () => {
              alert('Notificación de Samuel Lopez');
            },
          },
        },
        {
          label: 'Ignacio Fernandez finalizó Programa Recursos Humanos',
          avatarName: 'Ignacio Fernandez',
          avatarImgUrl:
            'https://material.angular.io/assets/img/examples/shiba1.jpg',
          onClick: {
            action: (name = 'Ignacio Fernandez') => {
              alert('Notificación de ' + name);
            },
          },
        },
        {
          label: 'Ramiro Gomez finalizó Programa Desarrollo',
          avatarName: 'Ramiro Gomez',
          avatarImgUrl:
            'https://material.angular.io/assets/img/examples/shiba1.jpg',
          onClick: {
            action: (name = 'Ramiro Gomez') => {
              alert('Notificación de ' + name);
            },
          },
        },
      ],
      seeAllButton: {
        seeAllAuthorizations: {
          label: 'Ver todas',
          onClick: {
            action: (path = '/autorizaciones') => {
              alert('Redirige a pantalla: ' + path);
            },
          },
        },
        seeAllNotifications: {
          label: 'Ver todas',
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
    },
    companyData: {
      companyImage: 'company-logo.svg',
    },
    box: [
      {
        label: 'Alguna Acción',
        onClick: {
          action: () => {
            alert('Se realiza alguna acción');
          },
        },
      },
    ],
    userData: {
      fullName: 'Stela Lopez',
      email: 'slopez@empresa.com',
      jobPositions: [
        {
          CompaniaCodigo: 180,
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
          onClick: {
            action: (position = 'Gerente Desarrollo') => {
              alert('Puesto elegido: ' + position);
            },
          },
        },
        {
          CompaniaCodigo: 190,
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
    twClass: '',
  },
};

export const WithCompanyName: Story = {
  args: {
    ...Default.args,
    companyData: {
      companyName: 'ASEINFO',
      companyImage: 'company-logo.svg',
    },
  },
};
