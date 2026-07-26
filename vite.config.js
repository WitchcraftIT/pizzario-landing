import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pizzario-landing/',
  plugins: [react()],
})
