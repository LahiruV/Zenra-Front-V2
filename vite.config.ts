import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@zenra/components': path.resolve(__dirname, 'src/components'),
      '@zenra/layouts': path.resolve(__dirname, 'src/layout'),
      '@zenra/configs': path.resolve(__dirname, 'src/libs/configs'),
      '@zenra/widgets': path.resolve(__dirname, 'src/libs/widgets'),
    }
  }
});
