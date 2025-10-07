import { defineConfig } from 'vite'
import veauryVitePlugins from 'veaury/vite'

export default defineConfig({
  plugins: [
    veauryVitePlugins({
      type: 'vue',
    })
  ]
})