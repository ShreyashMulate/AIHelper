import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    port: 5000,
    allowedHosts : [
      "91eaa7424cc4.ngrok-free.app",
      'aihelper-production-0c01.up.railway.app',
    ]
  }
})
