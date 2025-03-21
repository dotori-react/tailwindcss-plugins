import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'lib/index.ts',
      name: 'tailwindcss-scrollbar',
      fileName: format => `index.${format}.js`,
    },
  },
  plugins: [dts({ include: './lib' })],
});
