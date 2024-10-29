import {
  Meta,
  StoryObj,
  applicationConfig,
  moduleMetadata,
} from '@storybook/angular';
import { AccordionComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

const meta: Meta<AccordionComponent> = {
  title: 'Evolution Components/Accordion',
  component: AccordionComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuración completa del acordeón',
      defaultValue: {
        title: 'Mi Acordeón',
        icon: { icon: 'add-user.svg', type: 'svg' },
        height: '200px',
        twClass: '',
      },
      table: {
        type: { summary: 'IAccordionConfig' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const InteractiveAccordion: Story = {
  render: (args) => ({
    props: {
      config: args.config,
    },
    template: `
        <evo-accordion [config]="config">
          <p>Este es el contenido dentro del acordeón.</p>
          <p>Puedes colocar cualquier tipo de HTML o componentes aquí.</p>
        </evo-accordion>
      `,
  }),
  args: {
    config: {
      title: 'Mi Acordeón',
      icon: { icon: 'add-user.svg', type: 'svg' },
      height: '200px',
      twClass: '',
    },
  },
};
