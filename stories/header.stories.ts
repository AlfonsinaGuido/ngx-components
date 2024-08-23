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
      appIcon: {
        icon: 'app-menu.svg',
        type: 'svg',
      },
      notificationIcon: {
        icon: 'bell.svg',
        type: 'svg',
      },
    },
    titles: {
      appTitle: 'Tus aplicaciones',
      notificationTitle: 'Notificaciones',
    },
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
      userDataItems: [
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
    },
    companyData: {
      companyImage: 'company-logo.svg',
    },
    box: [
      {
        label: 'Cambiar Perfil',
        action: (param = ' con param') => {
          console.log('funciona' + param);
        },
      },
    ],
    userData: {
      fullName: 'Stela Lopez',
      email: 'slopez@empresa.com',
      position: 'Gerente Desarrollo',
    },
    classes: '',
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
