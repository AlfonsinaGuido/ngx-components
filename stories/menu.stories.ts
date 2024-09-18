import { MenuComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

const meta: Meta<MenuComponent> = {
  title: 'Evolution Components/Menu',
  component: MenuComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync(), provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {
  args: {
    icons: {
      buttonIcon: {
        icon: 'app-menu.svg',
        type: 'svg',
      },
      closeIcon: {
        icon: 'close.svg',
        type: 'svg',
      },
    },
    title: 'Tus aplicaciones',
    items: [
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
    twClass: '',
  },
};

export const AuthorizationsMenu: Story = {
  args: {
    icons: {
      buttonIcon: {
        icon: 'fact_check',
        type: 'class',
      },
      closeIcon: {
        icon: 'close.svg',
        type: 'svg',
      },
    },
    title: 'Autorizaciones',
    lengthOfItems: 3,
    items: [
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
    twClass: '',
  },
};

export const NotificationsMenu: Story = {
  args: {
    icons: {
      buttonIcon: {
        icon: 'bell.svg',
        type: 'svg',
      },
      closeIcon: {
        icon: 'close.svg',
        type: 'svg',
      },
    },
    title: 'Notificaciones',
    lengthOfItems: 3,
    items: [
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
      {
        label: 'Samuel Lopez finalizó Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Samuel Lopez') => {
            alert('Notificación de: ' + name);
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
            alert('Notificación de: ' + name);
          },
        },
      },
    ],
    twClass: '',
  },
};

export const WithScroll: Story = {
  args: {
    ...NotificationsMenu.args,
    lengthOfItems: 15,
    items: [
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
      {
        label: 'Samuel Lopez finalizó Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Samuel Lopez') => {
            alert('Notificación de: ' + name);
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
            alert('Notificación de: ' + name);
          },
        },
      },
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
      {
        label: 'Samuel Lopez finalizó Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Samuel Lopez') => {
            alert('Notificación de: ' + name);
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
            alert('Notificación de: ' + name);
          },
        },
      },
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
      {
        label: 'Samuel Lopez finalizó Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Samuel Lopez') => {
            alert('Notificación de: ' + name);
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
            alert('Notificación de: ' + name);
          },
        },
      },
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
      {
        label: 'Samuel Lopez finalizó Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Samuel Lopez') => {
            alert('Notificación de: ' + name);
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
            alert('Notificación de: ' + name);
          },
        },
      },
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
      {
        label: 'Samuel Lopez finalizó Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Samuel Lopez') => {
            alert('Notificación de: ' + name);
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
            alert('Notificación de: ' + name);
          },
        },
      },
    ],
  },
};

export const SettingsMenu: Story = {
  args: {
    icons: {
      buttonIcon: {
        icon: 'settings.svg',
        type: 'svg',
      },
      closeIcon: {
        icon: 'close.svg',
        type: 'svg',
      },
    },
    title: 'Ajustes',
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
    twClass: '',
  },
};

export const UserMenu: Story = {
  args: {
    icons: {
      closeIcon: {
        icon: 'close.svg',
        type: 'svg',
      },
    },
    userData: {
      fullName: 'Stela Lopez',
      email: 'slopez@empresa.com',
      jobPositions: [
        {
          Nombre: 'Gerente Desarrollo',
          disabled: true,
        },
        {
          Nombre: 'Gerente Calidad',
          onClick: {
            action: (position = 'Gerente Calidad') => {
              alert('Puesto elegido: ' + position);
            },
          },
        },
        {
          Nombre: 'Community Manager',
          onClick: {
            action: (position = 'Community Manager') => {
              alert('Puesto elegido: ' + position);
            },
          },
        },
      ],
    },
    items: [
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
    twClass: '',
  },
};
