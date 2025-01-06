// 路由菜单定义
export interface MenusModel {
  key: string
  label: string
  icon?: string
  hidden?: boolean // 隐藏路由
  children?: Array<MenusModel>
}
