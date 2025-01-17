import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'material-ui': ['@mui/material', '@mui/icons-material'],
          'tensorflow': ['@tensorflow/tfjs', '@tensorflow-models/universal-sentence-encoder']
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.PORT || 3030}`,
        changeOrigin: true
      }
    }
  }
})
