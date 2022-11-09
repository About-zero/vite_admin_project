import { IMenu } from "#/menu";
import { ref } from "vue";
import router from "@/router";
import utils from '@/utils';
import { CacheEnum } from '@/enum/cacheEnum';
import { RouteLocationNormalized } from 'vue-router';

class Menu {
    public menus = ref<IMenu[]>([])
    public history = ref<IMenu[]>([])
    public close = ref(false)
    public route = ref(null as RouteLocationNormalized | null)
    constructor() {
        this.menus.value = this.getMenuByRoutes()
        this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
    }
    // 添加历史菜单
    addHistoryMenu(route: RouteLocationNormalized) {
        if (!route.meta?.menu) return
        this.route.value = route
        const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
        const isHas = this.history.value.some(menu => menu.route === route.name)
        if (!isHas) this.history.value.unshift(menu)
        if (this.history.value.length > 10) {
            this.history.value.pop()
        }


        utils.store.set(CacheEnum.HISTORY_MENU, this.history.value)
    }
    // 移除历史菜单
    removeHistoryMenu(route: IMenu) {
        const index = this.history.value.indexOf(route)
        this.history.value.splice(index, 1)
    }
    toggleParentMenu(menu: IMenu) {
        this.menus.value.forEach(m => {
            m.isClick = false
            if (m === menu) m.isClick = true
        })
    }
    // 切换menu是否展开
    toggleState() {
        this.close.value = !this.close.value
    }
    // 设置当前菜单
    setCurrentMenu(route: RouteLocationNormalized) {
        this.menus.value.forEach(m => {
            m.isClick = false
            m.children?.forEach(c => {
                c.isClick = false
                if (c.route === route.name) {
                    m.isClick = true
                    c.isClick = true
                }
            })
        })
    }
    getMenuByRoutes() {
        return router.getRoutes().filter(route => route.children.length && route.meta.menu).map(route => {
            let menu: IMenu = { ...route.meta?.menu }
            menu.children = route.children.filter(route => route.meta?.menu).map(route => {
                return { ...route.meta?.menu, route: route.name }
            }) as IMenu[]
            return menu
        }).filter(menu => menu.children?.length)
    }
}
export default new Menu()