interface Menu {
    // 路由标题
    title?: string,
    icon?: string,
    // 是否当前选中
    isClick?: boolean,
    route?: string
}
export interface IMenu extends Menu {
    children?: Menu[]
}