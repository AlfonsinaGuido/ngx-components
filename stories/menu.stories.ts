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
    buttonIcon: {
      icon: 'app-menu.svg',
      type: 'svg',
    },
    closeIcon: {
      icon: 'close.svg',
      type: 'svg',
    },
    title: 'Tus aplicaciones',
    items: [
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
    classes: '',
  },
};

export const NotificationsMenu: Story = {
  args: {
    buttonIcon: {
      icon: 'bell.svg',
      type: 'svg',
    },
    closeIcon: {
      icon: 'close.svg',
      type: 'svg',
    },
    title: 'Notificaciones',
    notificationsNumber: 3,
    items: [
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
      {
        label: 'Samuel Lopez finalizo Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: () => {
            console.log('funciona sin param');
          },
        },
      },
      {
        label: 'Ignacio Fernandez finalizo Programa Recursos Humanos',
        avatarName: 'Ignacio Fernandez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Ignacio Fernandez') => {
            console.log('Felicidades ' + name);
          },
        },
      },
    ],
    classes: '',
  },
};

export const WithScroll: Story = {
  args: {
    ...NotificationsMenu.args,
    notificationsNumber: 15,
    items: [
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
      {
        label: 'Samuel Lopez finalizo Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: () => {
            console.log('funciona sin param');
          },
        },
      },
      {
        label: 'Ignacio Fernandez finalizo Programa Recursos Humanos',
        avatarName: 'Ignacio Fernandez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Ignacio Fernandez') => {
            console.log('Felicidades ' + name);
          },
        },
      },
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
      {
        label: 'Samuel Lopez finalizo Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: () => {
            console.log('funciona sin param');
          },
        },
      },
      {
        label: 'Ignacio Fernandez finalizo Programa Recursos Humanos',
        avatarName: 'Ignacio Fernandez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Ignacio Fernandez') => {
            console.log('Felicidades ' + name);
          },
        },
      },
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
      {
        label: 'Samuel Lopez finalizo Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: () => {
            console.log('funciona sin param');
          },
        },
      },
      {
        label: 'Ignacio Fernandez finalizo Programa Recursos Humanos',
        avatarName: 'Ignacio Fernandez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Ignacio Fernandez') => {
            console.log('Felicidades ' + name);
          },
        },
      },
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
      {
        label: 'Samuel Lopez finalizo Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: () => {
            console.log('funciona sin param');
          },
        },
      },
      {
        label: 'Ignacio Fernandez finalizo Programa Recursos Humanos',
        avatarName: 'Ignacio Fernandez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Ignacio Fernandez') => {
            console.log('Felicidades ' + name);
          },
        },
      },
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
      {
        label: 'Samuel Lopez finalizo Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: () => {
            console.log('funciona sin param');
          },
        },
      },
      {
        label: 'Ignacio Fernandez finalizo Programa Recursos Humanos',
        avatarName: 'Ignacio Fernandez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Ignacio Fernandez') => {
            console.log('Felicidades ' + name);
          },
        },
      },
    ],
  },
};

export const UserMenu: Story = {
  args: {
    closeIcon: {
      icon: 'close.svg',
      type: 'svg',
    },
    userData: {
      fullName: 'Stela Lopez',
      email: 'slopez@empresa.com',
      position: 'Gerente Desarrollo',
    },
    items: [
      {
        label: 'Cerrar Sesión',
        icon: {
          icon: 'logout.svg',
          type: 'svg',
          position: 'left',
        },
        onClick: {
          action: (param = ' con param') => {
            console.log('funciona' + param);
          },
        },
      },
    ],
    classes: '',
  },
};
