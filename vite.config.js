import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/chronicle/' : '/',
  server: {
    host: '0.0.0.0',
    port: 5200
  },
  build: {
    outDir: 'dist'
  }
})
