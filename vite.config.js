import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  // ✅ Add this to let Vite handle .lottie files as static assets
  assetsInclude: ['**/*.lottie'],
});
