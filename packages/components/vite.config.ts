import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { dependencies, peerDependencies } from './package.json';

import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      name: '@component-lib/components',
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        theme: resolve(__dirname, 'src/theme/index.ts'),
      },
      formats: ['es'],
      fileName: (_, entryName): string => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies || {}),
        ...Object.keys(peerDependencies || {}),
        // Subfolder imports
        'react/jsx-runtime',
        '@emotion/react/jsx-runtime',
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  plugins: [
    dts({
      copyDtsFiles: true,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
