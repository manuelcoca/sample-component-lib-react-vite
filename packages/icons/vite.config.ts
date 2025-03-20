import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { peerDependencies } from './package.json';

import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      name: '@component-lib/icons',
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies || {}),
        // Subfolder imports
        'react/jsx-runtime',
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
