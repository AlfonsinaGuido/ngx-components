import { TimeSegmentedListComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideMarkdown } from 'ngx-markdown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TimeSegmentedListComponent> = {
  title: 'Evolution Components/Time Segmented List',
  component: TimeSegmentedListComponent,
  decorators: [
    applicationConfig({
      providers: [provideMarkdown()],
    }),
  ],
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
        label:
          'Carlos Sanchez finalizó Programa Recursos Humanos. El empleado **Carlos Sanchez** completó el programa de **Recursos Humanos**.',
        avatarName: 'Carlos Sanchez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Carlos Sanchez') => {
            alert('Notificación de: ' + name);
          },
        },
        date: '2024-03-09T07:00:00',
      },
      {
        label: 'Samuel Lopez finalizó Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        onClick: {
          action: (name = 'Samuel Lopez') => {
            alert('Notificación de: ' + name);
          },
        },
        date: '2024-03-09T07:00:00',
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
        date: '2024-03-09T07:00:00',
      },
      {
        label:
          'Carlos Sanchez finalizó Programa Recursos Humanos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error repellendus nemo, dolorem voluptatem voluptates optio quas, minus dolor odit nihil est quaerat alias nulla iusto cumque, consequuntur sed placeat.',
        avatarName: 'Carlos Sanchez',
        avatarImgUrl:
          'https://material.angular.io/assets/img/examples/shiba1.jpg',
        onClick: {
          action: (name = 'Carlos Sanchez') => {
            alert('Notificación de: ' + name);
          },
        },
        date: '2024-03-09T07:00:00',
      },
      {
        label: 'Samuel Lopez finalizó Programa Desarrollo',
        avatarName: 'Samuel Lopez',
        onClick: {
          action: (name = 'Samuel Lopez') => {
            alert('Notificación de: ' + name);
          },
        },
        date: '2024-10-21T07:00:00',
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
        date: '2024-10-22T07:00:00',
      },
    ],
    twClass: '',
  },
};
