import { defineConfig } from 'vite'
import { join } from "path";
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // （设计稿/10）1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  }
})
