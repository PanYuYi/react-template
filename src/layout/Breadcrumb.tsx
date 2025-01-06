import { AllState } from '@/store'
import { Breadcrumb } from 'antd'
import { AnyObject } from 'antd/es/_util/type'
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

interface IProps {
  className?: string
}

declare module 'antd/es/breadcrumb/Breadcrumb' {
  export interface BreadcrumbItemType {
    hidden?: boolean
    disabled?: boolean
    query?: string
  }
}

export default function BreadcrumbComp({ className }: IProps) {
  const location = useLocation()
  const { pathname } = location
  const currentPathArr = pathname.split('/').filter((v) => !!v)
  const routers = useSelector((state: AllState) => state.system.menus)

  const breadcrumbList: BreadcrumbItemType[] = []

  function dealBreadcrumbData(list: typeof routers, index = 0) {
    for (let i = 0; i < list.length; i++) {
      const routerItem = list[i]
      if (routerItem.key != currentPathArr[index]) continue
      breadcrumbList.push({
        title: routerItem.label,
        path: routerItem.key,
        hidden: index === 0,
      })
      if (routerItem.children?.length) {
        dealBreadcrumbData(routerItem.children, index + 1)
      }
    }
    if (breadcrumbList.length) {
      breadcrumbList[0].disabled = true
      breadcrumbList[breadcrumbList.length - 1].disabled = true
    }
  }

  dealBreadcrumbData(routers)

  function itemRender(
    item: Partial<BreadcrumbItemType>,
    _params: AnyObject,
    _items: Partial<BreadcrumbItemType>[],
    paths: string[],
  ) {
    console.log('paths >>>>>  ', paths)
    if (item.disabled) {
      return <span>{item.title}</span>
    }
    return <Link to={'/' + paths.join('/')}>{item.title}</Link>
  }

  return <Breadcrumb className={`${className}`} itemRender={itemRender} items={breadcrumbList}></Breadcrumb>
}
