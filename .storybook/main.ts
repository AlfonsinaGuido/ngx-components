import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../stories/*.mdx', '../stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-deep-controls',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: ['../stories/assets/svg'],
};
export default config;
