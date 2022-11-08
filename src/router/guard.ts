import { CacheEnum } from "@/enum/cacheEnum"
import menuStore from "@/store/menuStore"
import user from "@/store/userStore"
import utils from "@/utils"
import { RouteLocationNormalized, Router } from "vue-router"

class Guard {
    constructor(private router: Router) {

    }
    public run() {
        this.router.beforeEach(this.beforeEach.bind(this))
    }
    private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
        // 登录和权限的处理
        // to里面的meta是我们自定义的路由规则（是否需要登录验证），可以看一下layouts里面的amdin布局
        if (this.isAuthCheck(to) === false) return { name: 'login' }
        if (this.isGuestCheck(to) === false) return { name: 'home' }
        await this.getUserInfo()
        // 添加历史菜单
        // menuStore().addHistoryMenu(to)
    }
    // 获取用户信息
    private getUserInfo() {
        if (this.token()) return user().getUserInfo()
    }
    private token(): string | null {
        return utils.store.get(CacheEnum.TOKEN_NAME)
    }
    // 游客拦截
    private isGuestCheck(route: RouteLocationNormalized) {
        return Boolean(!route.meta.guest || route.meta.guest && !this.token())

    }
    // 是否登录拦截
    private isAuthCheck(route: RouteLocationNormalized) {
        const state = Boolean(!route.meta.auth || route.meta.auth && this.token())
        if (state === false) {
            utils.store.set(CacheEnum.REDIRECT_ROUTE_NAME, route.name)
        }
        return state
    }
}
export default (router: Router) => {
    new Guard(router).run()
}