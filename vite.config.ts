import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const _fileUri = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:[
      {
        find:/@\//,
        replacement: `${_fileUri}/src/`
      }
    ]
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    cors: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true
      }
    }
  }
})
