import { defineConfig } from 'vite'
import veauryVitePlugins from 'veaury/vite/index.js'

export default defineConfig({
  plugins: [
    veauryVitePlugins({
      type: 'vue',
    })
  ]
})
