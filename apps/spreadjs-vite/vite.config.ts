/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';
import toplevelawait from 'vite-plugin-top-level-await';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/spreadjs-vite',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    federation({
      name: 'spreadjsVite',
      filename: 'remoteEntry.js',
      exposes: {
        app: './src/app/app.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
    toplevelawait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],

  build: {
    outDir: '../../dist/apps/spreadjs-vite',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      //External packages that should not be bundled into your library.
      external: ['__federation__', 'react', 'react-dom'],
    },
  },
});
