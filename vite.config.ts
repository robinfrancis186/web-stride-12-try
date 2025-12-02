import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // load .env, .env.[mode] into `env` (values are strings)
  const env = loadEnv(mode, process.cwd(), '');

  // Option 1: set base from env variable VITE_GH_PAGES_BASE (recommended)
  // Option 2: if not provided, fallback to '/<REPO>/' — replace <REPO> with your repo name
  const base = '/';

  return {
    // base, // important for asset paths
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
