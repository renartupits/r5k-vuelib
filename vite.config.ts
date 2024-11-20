import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'r5kvuelib',
      fileName: 'r5k-vuelib',
      formats: ['es', 'cjs', 'umd'], // Output formats
    },
    rollupOptions: {
      external: ['vue'], // Do not bundle Vue to avoid conflicts
      output: {
        globals: {
          vue: 'Vue', // Vue global variable for UMD builds
        },
      }
    }
  }
})
