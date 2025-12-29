import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages:
// - If your repo is named "portfolio", use base: '/portfolio/'
// - If your repo is username.github.io, use base: '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'),
  build: {
    outDir: 'dist',
  },
})

