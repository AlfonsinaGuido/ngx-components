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
    },
    titles: {
      appTitle: 'Tus aplicaciones',
      authorizationTitle: 'Autorizaciones',
      notificationTitle: 'Notificaciones',
    },
    buttonItems: {
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
          label: 'Carlos Sanchez finalizo Programa Recursos Humanos',
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
          label: 'Samuel Lopez finalizo Programa Desarrollo',
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
          label: 'Ignacio Fernandez finalizo Programa Recursos Humanos',
          avatarName: 'Ignacio Fernandez',
          avatarImgUrl:
            'https://material.angular.io/assets/img/examples/shiba1.jpg',
          onClick: {
            action: (name = 'Ignacio Fernandez') => {
              alert('Notificación de ' + name);
            },
          },
        },
      ],
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
          Nombre: 'Gerente Desarrollo',
        },
        {
          Nombre: 'Gerente Calidad',
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
