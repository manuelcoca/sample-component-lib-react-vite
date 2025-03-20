import { StorybookConfig } from '@storybook/react-vite';

import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['./stories/**/*.stories.@(|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Merge custom Vite config
    return {
      ...config,
      build: {
        ...config.build,
        outDir: resolve(__dirname, '../dist'),
      },
      resolve: {
        ...config.resolve,
        // Force CommonJS modules with named exports to be treated as having a default export
        mainFields: ['module', 'jsnext:main', 'jsnext'],
      },
    };
  },
};

export default config;
