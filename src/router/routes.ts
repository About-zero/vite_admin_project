import { RouteRecordRaw } from "vue-router"

const routes = [
    // { path: '/', component: () => import('../views/home.vue') }
    {
        path: "/",
        name: 'home',
        component: () => import("@/views/home.vue")
    },
    {
        path: "/login",
        name: 'login',
        component: () => import("@/views/auth/login.vue"),
        meta: { guest: true }
    },
] as RouteRecordRaw[]
export default routes