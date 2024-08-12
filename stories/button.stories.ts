import { ButtonComponent } from '@aseinfo/ngx-evolution-components/public-api';
import type { Meta, StoryObj } from '@storybook/angular';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Evolution Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

const Testing = (a:number,b:number): any => {
  let res = a + b;
  console.log('res => ', res);
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    theme: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    theme: 'secondary',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    theme: 'warning',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: {
      icon: 'add-user.svg',
      type: 'svg',
      position: 'left',
    },
  },
};

export const OnlyIcon: Story = {
  args: {
    icon: {
      icon: 'add-user.svg',
      type: 'svg',
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithoutBorder: Story = {
  args: {
    ...Default.args,
    withoutBorder: true,
  },
};

export const IsFlat: Story = {
  args: {
    ...Default.args,
    isFlat: true,
  },
};

export const IsFluid: Story = {
  args: {
    ...Default.args,
    isFluid: true,
  },
};

const Testing2 = () => {
  console.log('Funciono!');
};

const functionTest = {
  action: Testing2
}

export const onClick: Story = {
  args: {
    ...Default.args,
    onClick: {
      action: Testing2
    },
  },
};
