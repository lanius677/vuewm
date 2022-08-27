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
  server: {
    host: '127.0.0.1',//ip地址
    port: 6777, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
  },
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
