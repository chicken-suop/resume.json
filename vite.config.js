import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/resume.json',
    define: {
      'import.meta.env.VITE_USE_TAILORED_RESUME': JSON.stringify(false),
    },
    esbuild: {
      supported: {
        'top-level-await': true,
      },
    },
    server: {
      host: '0.0.0.0',
      port: Number(process.env['PORT'] ?? '3000'),
    },
  };
});
