import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'ng-devui': '/devui',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules'],
      },
    },
  },
});
