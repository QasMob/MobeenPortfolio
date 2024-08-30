// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pipeline: resolve(__dirname, 'pipeline.html'),
        Mobeen_Qasim_Resume_PDF: resolve(__dirname, './public/Mobeen_Qasim_Resume_PDF.pdf'),
      },
    },
  },
})