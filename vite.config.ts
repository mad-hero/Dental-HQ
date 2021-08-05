/**
 * Vite configuaration file
 * https://vitejs.dev/config/
 */

import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import createMockServer from './mock'

const mock = (): Plugin => ({
  name: 'mock',
  configureServer: async server => {
    // Add mock server, `/api` is the base url
    server.middlewares.use('/api', createMockServer())
  }
})

const sfcCustomBlocks = (): Plugin => ({
  name: 'sfcCustomBlocks',
  transform: (code, id) => {
    if (!/vue&type=title/.test(id)) return
    // title black
    return `export default Component => {
      Component.title = '${code}'
    }`
  }
})

export default defineConfig({
  plugins: [vue(), sfcCustomBlocks(), mock()]
})
