import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import postCSSPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import postCSSPxToRem from 'postcss-pxtorem'
import svgr from 'vite-plugin-svgr'

const rootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true
  },
  resolve: {
    alias: {
      '@components': resolve(rootDir, 'src', 'components'),
      '@models': resolve(rootDir, 'src', 'models'),
      '@routes': resolve(rootDir, 'src', 'routes'),
      '@services': resolve(rootDir, 'src', 'services'),
      '@store': resolve(rootDir, 'src', 'store'),
      '@theme': resolve(rootDir, 'src', 'theme'),
      '@utils': resolve(rootDir, 'src', 'utils')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@theme/mixins";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer,
        postCSSPresetEnv({ stage: 3 }),
        postCSSPxToRem({ propList: ['*'] })
      ]
    }
  },
  plugins: [
    svgr({ exportAsDefault: true }),
    react()
  ]
})
