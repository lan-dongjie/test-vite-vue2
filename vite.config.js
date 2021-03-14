import path from 'path';
import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  plugins: [
    // vue()
    createVuePlugin(),
  ],
});
