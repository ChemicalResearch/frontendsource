import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss({
        content: [
          './index.html',
          './src/**/*.{jsx,tsx}',
          './node_modules/react-tailwindcss-select/dist/index.esm.js'
        ],
      })],
    },
  },
})
