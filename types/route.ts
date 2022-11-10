import 'vue-router'
import { IMenu } from '#/menu';

declare module 'vue-router' {
  interface RouteMeta {
    // 自定义路由元信息
    // 是否需要登录验证
    auth?: boolean,
    // 是否是游客
    guest?: boolean,
    menu?: IMenu,
    // 路由切换动画
    enterClass?: string,
    leaveClass?: string,
    // 访问权限
    permissions?: string
  }
}