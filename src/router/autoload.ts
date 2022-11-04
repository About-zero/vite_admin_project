import { RouteRecordRaw } from "vue-router"
import { env } from '@/utils/helper'
const layouts = import.meta.glob('../layouts/*.vue', { eager: true })
const views = import.meta.glob('../views/**/*.vue', { eager: true }) // **的意思是能够遍历到子目录 {eager: true} 为直接引入，不写{eager: true}是动态引入
function getRoutes() {
    const layoutRoutes = [] as RouteRecordRaw[]
    Object.entries(layouts).forEach(([file, module]) => {
        const route = getRouteByModule(file, module)
        route.children = getChildrenRoutes(route)
        layoutRoutes.push(route)
    })
    return layoutRoutes
}

// 获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    // console.log(layoutRoute)
    const routes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            const route = getRouteByModule(file, module)
            routes.push(route)
        }
    })
    return routes
}
// 获取布局路由
function getRouteByModule(file: string, module: { [key: string]: any }) {
    // console.log(file.split('/').pop()?.split('.')[0])
    // console.log(file.match(/\.\.\/layouts\/(?<name>.+)?\.vue/i)?.groups?.name)
    // console.log(file.replace(/.+layouts\/|\.vue/gi, ''))
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
    const route = {
        path: `/${name}`,
        name: name.replace('/', '.'),
        component: module.default,
    } as RouteRecordRaw

    // return route
    return Object.assign(route, module.default?.route)
}

const routes = env.VITE_ROUTER_AUTOLOAD ? getRoutes() : [] as RouteRecordRaw[]
export default routes