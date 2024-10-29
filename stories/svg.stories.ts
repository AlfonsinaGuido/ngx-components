import { provideHttpClient } from '@angular/common/http';
import { SvgComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

const meta: Meta<SvgComponent> = {
  title: 'Evolution Components/Svg',
  component: SvgComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SvgComponent>;

export const Default: Story = {
  args: {
    svgPath: 'bell.svg',
    twClass: '',
  },
};
