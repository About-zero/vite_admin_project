import utils from '@/utils'
import { RouteLocationRaw } from 'vue-router'
import autoLoadModuleRoutes from './module'
import getRoutes from './view'
let routes = [] as RouteLocationRaw[]
if (utils.env.VITE_ROUTER_AUTOLOAD) {
    routes = getRoutes()
} else {
    routes = autoLoadModuleRoutes()
}
// TODO 通过权限过滤路由
export default routes