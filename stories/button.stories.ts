import { provideHttpClient } from '@angular/common/http';
import { ButtonComponent } from '@aseinfo/ngx-evolution-components/public-api';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { provideMarkdown } from 'ngx-markdown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Evolution Components/Button',
  component: ButtonComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient(), provideMarkdown()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Button',
    twClass: '',
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

export const WithMarkdown: Story = {
  args: {
    label: '**Carlos Sanchez** finalizó Programa Desarrollo',
    isMarkdown: true,
    twClass: '',
  },
};

export const WithFunction: Story = {
  args: {
    ...Default.args,
    onClick: {
      action: (param = 'con param') => {
        alert('Función ' + param);
      },
    },
  },
};

export const WithMatIcon: Story = {
  args: {
    icon: {
      icon: 'home',
      type: 'class',
    },
  },
};

export const WithAvatarName: Story = {
  args: {
    avatarName: 'Carlos Sanchez',
    withoutBorder: true,
  },
};

export const WithAvatarImg: Story = {
  args: {
    avatarName: 'Carlos Sanchez',
    avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },
};

export const WithAvatarAndLabel: Story = {
  args: {
    ...WithMarkdown.args,
    avatarName: 'Carlos Sanchez',
    avatarImgUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  },
};

export const WithSvgIcon: Story = {
  args: {
    ...Default.args,
    icon: {
      icon: 'add-user.svg',
      type: 'svg',
    },
  },
};

export const OnlySvgIcon: Story = {
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
