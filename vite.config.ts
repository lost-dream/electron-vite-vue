import { rmSync } from 'fs';
import { defineConfig } from 'vite';
import path from 'path';
import pkg from './package.json';
import { createVitePlugins } from './build/vite';

rmSync('dist-electron', { recursive: true, force: true });

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: path.resolve(process.cwd(), '.', 'src') + '/',
      },
    ],
  },
  plugins: createVitePlugins(),
  server: process.env.VSCODE_DEBUG
    ? (() => {
        const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
        return {
          host: url.hostname,
          port: +url.port,
        };
      })()
    : undefined,
  clearScreen: false,
});
