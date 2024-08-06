import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
    applicationConfig,
    type Meta,
    type StoryObj,
  } from '@storybook/angular';
import { HighlightComponent } from '@aseinfo/ngx-evolution-components/public-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<HighlightComponent> = {
    title: 'Evolution Components/Highlight',
    component: HighlightComponent,
    decorators: [
        applicationConfig({
          providers: [provideAnimationsAsync()],
        }),
      ],
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HighlightComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
      title: 'Te apoyamos en cada paso hacia tu éxito profesional',
    },
};

export const Subtitle: Story = {
    args: {
        ...Default.args,
        subtitle: 'Nuestra plataforma te permite llevar el control de tu progreso en las fases del onboarding de la manera más eficiente.',
    },
};

export const CardText: Story = {
    args: {
        ...Default.args,
        cardtext: 'Inicia sesión para acceder a tu cuenta, revisa tu tablero con el resumen de actividades y su estado actual.',
    },
};