import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/v1': {
        target: 'http://localhost:9090/',
        changeOrigin: true,
      },
      /** @TODO 테스트 제거 */
      '/test': {
        target: 'http://localhost:9090/',
        changeOrigin: true,
      },
    }
  }
})
