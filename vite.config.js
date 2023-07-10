import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// Vite configuration
export default defineConfig({
  plugins: [react()],
});
