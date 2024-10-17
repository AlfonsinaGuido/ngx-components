import { TimeSegmentedListComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { type Meta, type StoryObj } from '@storybook/angular';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TimeSegmentedListComponent> = {
  title: 'Evolution Components/Time Segmented List',
  component: TimeSegmentedListComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TimeSegmentedListComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    titles: {
      today: 'Hoy',
      thisWeek: 'Esta Semana',
      previous: 'Anteriores',
    },
    emptyListMessage: 'Sin contenido',
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
        date: '2024-10-10T07:30:00.000-06:00',
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
        date: '2024-10-10T07:30:00.000-06:00',
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
        date: '2024-10-08T07:30:00.000-06:00',
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
        date: '2024-10-07T07:30:00.000-06:00',
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
        date: '2024-10-07T07:30:00.000-06:00',
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
        date: '2024-10-06T07:30:00.000-06:00',
      },
    ],
    twClass: '',
  },
};
