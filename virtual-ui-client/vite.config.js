import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Render/static hosts: crossorigin on CSS links can block stylesheets (no CORS headers).
function stripCrossorigin() {
  return {
    name: 'strip-crossorigin',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin/g, '')
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), stripCrossorigin()],
  base: '/',
  build: {
    modulePreload: false,
  },
  server: {
    port: 5173,
  },
})
