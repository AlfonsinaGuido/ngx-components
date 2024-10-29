import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { SearchBarComponent } from '@aseinfo/ngx-evolution-components/public-api';

const meta: Meta<SearchBarComponent> = {
  title: 'Evolution Components/Search Bar',
  component: SearchBarComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SearchBarComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Buscar personas...',
    twClass: '',
  },
  parameters: {
    actions: {
      handles: ['searchQuery'],
    },
  },
};
