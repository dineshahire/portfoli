import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: [
      "skink-smooth-notably.ngrok-free.app", // your fixed domain
      "localhost"
    ]
  }
})
