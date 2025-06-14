import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://bc4hkl1l-8000.brs.devtunnels.ms',
        changeOrigin: true,
      }
    }
  }
})
