import { store } from "@/utils"
import { IDate } from "@/utils/store"
import { RouteLocationNormalized, Router } from "vue-router"

class Guard {
    constructor(private router: Router) {

    }
    public run() {
        this.router.beforeEach((to, from) => {
            // 登录和权限的处理
            let token = store.get('token')?.token
            // to里面的meta是我们自定义的路由规则（是否需要登录验证），可以看一下layouts里面的amdin布局
            if (this.isAuthCheck(to, token) === false) return { name: 'login' }
            if (this.isGuestCheck(to, token) === false) return { name: 'home' }
        })
    }
    // 游客拦截
    private isGuestCheck(route: RouteLocationNormalized, token: any) {
        return Boolean(!route.meta.guest || route.meta.guest && !token)

    }
    // 是否登录拦截
    private isAuthCheck(route: RouteLocationNormalized, token: any) {
        return Boolean(!route.meta.auth || route.meta.auth && token)
    }
}
export default (router: Router) => {
    new Guard(router).run()
}