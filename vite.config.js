import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `$injectedColor: orange;`
  //     }
  //   }
  // },
  // cssPreprocessOptions: {
  //   scss: {
  //     additionalData: '@import "./src/styles/reset.scss";' // 添加公共样式
  //   }
  // }
})
