import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['192.168.1.69'],
  },
});
