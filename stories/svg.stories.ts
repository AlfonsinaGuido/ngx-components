import { SvgComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<SvgComponent> = {
  title: 'Evolution Components/Svg',
  component: SvgComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SvgComponent>;

export const Default: Story = {
  args: {
    svgPath: 'bell.svg',
    classes: '',
  },
};
