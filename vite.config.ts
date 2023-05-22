import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const viteEnvs = loadEnv(mode, process.cwd());
  return defineConfig({
    base: './',
    plugins: [react()],
    server: {
      ...(viteEnvs.VITE_PORT && { port: parseInt(viteEnvs.VITE_PORT, 10) }),
    },
    preview: {
      ...(viteEnvs.VITE_PORT && { port: parseInt(viteEnvs.VITE_PORT, 10) }),
    },
  });
};
