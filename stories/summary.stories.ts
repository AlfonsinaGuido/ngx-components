import { SummaryComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { type Meta, type StoryObj } from '@storybook/angular';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SummaryComponent> = {
  title: 'Evolution Components/Summary',
  component: SummaryComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SummaryComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Resumen',
    elements: [
      {
        title: 'Empleados Asignados',
        description: '20',
      },
      {
        title: 'Programa',
        description: 'Programa Desarrolladores',
      },
      {
        title: 'Fecha de Asignación',
        description: '18 Noviembre 2024',
      },
      {
        title: 'Programa',
        description: 'Programa Desarrolladores',
      },
      {
        title: 'Fecha de Asignación',
        description: '18 Noviembre 2024',
      },
      {
        title: 'Empleados Asignados',
        description: '20',
      },
    ],
    twClass: '',
  },
};
