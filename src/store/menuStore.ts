import { defineStore } from 'pinia'
import { RouteLocationNormalized, RouteRecordNormalized, useRouter } from 'vue-router'
import { IMenu } from '#/menu';
import router from '@/router';
import utils from '@/utils';
import { CacheEnum } from '@/enum/cacheEnum';
export default defineStore('menu', {
    state: () => {
        return {
            menus: [] as IMenu[],
            historyMenu: [] as IMenu[]
        }
    },
    actions: {
        init() {
            this.getMenuByRoutes()
            this.historyMenu = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
        },
        // 添加历史菜单
        addHistoryMenu(route: RouteLocationNormalized) {
            if (!route.meta?.menu) return
            const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
            const isHas = this.historyMenu.some(menu => menu.route === route.name)
            if (!isHas) this.historyMenu.unshift(menu)
            if (this.historyMenu.length > 10) {
                this.historyMenu.pop()
            }


            utils.store.set(CacheEnum.HISTORY_MENU, this.historyMenu)
        },
        // 移除历史菜单
        removeHistoryMenu(route: IMenu) {
            const index = this.historyMenu.indexOf(route)
            this.historyMenu.splice(index, 1)
        },
        // 根据路由获取菜单
        getMenuByRoutes() {
            this.menus = router.getRoutes().filter(route => route.children.length && route.meta.menu).map(route => {
                let menu: IMenu = { ...route.meta?.menu }
                menu.children = route.children.filter(route => route.meta?.menu).map(route => {
                    return { ...route.meta?.menu, route: route.name }
                }) as IMenu[]
                return menu
            }).filter(menu => menu.children?.length)
        }
    }
})