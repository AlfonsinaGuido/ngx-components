import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BannerComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BannerComponent> = {
  title: 'Evolution Components/Banner',
  component: BannerComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimationsAsync()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BannerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Success: Story = {
  args: {
    title: 'Éxito',
    message: 'Se asignaron correctamente las personas al programa.',
    duration: 10000,
    twClass: '',
  },
};

export const Warning: Story = {
  render: (args) => ({
    props: {
      title: args.title,
      message: args.message,
      type: args.type,
      twClass: args.twClass,
      onRedirect: () => {
        alert('Se redirige a la ruta de Gestionar filtrando por actividad.');
      },
    },
    template: `
        <evo-banner [title]="title" [message]="message" [type]="type" [twClass]="twClass">
          <a class="!text-sm !text-caution !underline hover:!underline font-bold ms-1 cursor-pointer" (click)="onRedirect()" >Resolver ahora</a>
        </evo-banner>
      `,
  }),
  args: {
    title: 'Asignación de Encargado de Actividad Pendiente',
    message:
      'Existen inconsistencias en la asignación del Encargado de Actividad que deben ser resueltas.',
    type: 'caution',
    twClass: '',
  },
};

export const ControlledError: Story = {
  args: {
    title: 'Error',
    message: 'No se puede eliminar un programa con personas asignadas.',
    type: 'error',
    duration: 10000,
    twClass: '',
  },
};

export const UncontrolledError: Story = {
  args: {
    title: 'Error',
    message: 'No se pudo establecer conexión con el Identity Server.',
    type: 'error',
    useAnimation: false,
    twClass: '',
  },
};
