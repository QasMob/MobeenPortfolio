import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',           // Main entry point
        pipeline: './src/pipeline.html' // Additional HTML file in the src folder
      }
    }
  }
});
