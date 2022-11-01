
// 为环境变量添加类型提示
interface ViteEnv {
    VITE_SOME_KEY: number,
    VITE_ROUTE_AUTOLOAD: boolean,
    VITE_API_URL: string
}

// 让自定义的环境遍历在import.meta.env里有智能提示
interface ImportMetaEnv extends ViteEnv {

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}