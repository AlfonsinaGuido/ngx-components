import { InfoPanelComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideMarkdown } from 'ngx-markdown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InfoPanelComponent> = {
  title: 'Evolution Components/Info Panel',
  component: InfoPanelComponent,
  decorators: [
    applicationConfig({
      providers: [provideMarkdown()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InfoPanelComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Samuel Lopez finalizó Programa Desarrollo',
    subtitle: '30/09/2024',
    info: 'Estimado(a) Juana Margarita Rodas Opico,\n\nEste es un recordatorio de que su capacitación en **Atención al Cliente** se llevará a cabo mañana.\n\nAsegúrese de estar preparado.',
    twClass: '',
  },
};
