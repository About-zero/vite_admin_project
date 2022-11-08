import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 自定义路由元信息
    // 是否需要登录验证
    auth?: boolean,
    // 是否是游客
    guest?: boolean,
    // 路由是否在菜单中(menu)显示
    show?: boolean,
    // 路由标题
    title?: string,
    icon?: string,
    // 是否当前选中
    isClick?: boolean,
    // 访问权限
    permissions?: string[]
  }
}