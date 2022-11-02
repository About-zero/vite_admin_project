import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [vue()],
//   resolve: { 
//     alias,
//   }
// })

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build' // 是否是开发环境
  const root = process.cwd() // 项目根目录
  const env = parseEnv(loadEnv(mode, root)) // 获取env的配置项
  return {
    // plugins: [vue()],
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
    server: {
      host: 'localhost',
      open: true,
      port: 3000,
      // proxy: {
      //   "/api": {
      //     target: 'http://localhost:3000/', // 要访问的地址
      //     changeOrigin: true, // 开启代理
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
    }
  }
}