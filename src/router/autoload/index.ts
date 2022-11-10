import utils from '@/utils'
import { RouteLocationRaw, Router } from 'vue-router'
import autoLoadModuleRoutes from './module'
import getRoutes from './view'
import userStore from '@/store/userStore';

let routes: RouteLocationRaw[] = utils.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoLoadModuleRoutes()

function autoload(router: Router) {
    // 通过权限过滤路由
    const user = userStore()
    routes = routes.map(route => {
        route.children = route.children?.filter(r => {
            const permission = r.meta?.permissions
            return permission ? user.info?.permissions.includes(permission) : true
        })
        return route
    })
    routes.forEach(r => {
        router.addRoute(r)
    })
}
export default autoload