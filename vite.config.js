import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces for local Wi-Fi mobile testing
    port: 5173,
    open: false
  },
  preview: {
    host: '0.0.0.0',
    port: 4173
  }
});
