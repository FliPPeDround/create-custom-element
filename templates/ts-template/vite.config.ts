import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag: string[]) => tag.includes('-')
      }
    }
  })],
  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: 'src/CustomElement/index.ts',
      formats: ['es', 'cjs', 'iife'],
      name: 'CustomElement'
    }
  }
})
