import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 自定义路由元信息
    // 是否需要登录验证
    auth?: boolean,
    // 是否是游客
    guest?: boolean
  }
}