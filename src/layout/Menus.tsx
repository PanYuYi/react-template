import { Menu, MenuProps } from 'antd'
import { useSelector } from 'react-redux'
import { AllState } from '@/store/index'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MenusModel } from '@/store/types'

// 递归函数 -- 过滤掉disabled的
function filterFunc(list: MenusModel[]) {
  if (list?.length) {
    const _list = list.slice()
    const tempList: MenusModel[] = []
    for (let i = 0; i < _list.length; i++) {
      const item = { ..._list[i] }
      if (item.hidden) continue
      if (item.children?.length) {
        item.children = filterFunc(item.children)
        if (!item?.children?.length) delete item.children
      }
      tempList.push(item)
    }
    return tempList
  }
}

export default function Menus() {
  const navigate = useNavigate()
  const location = useLocation()
  const pathArr = location.pathname.split('/').filter((v) => v)
  const menus = useSelector((state: AllState) => state.system.menus)
  const items = filterFunc(menus)

  // 设置菜单选中项
  const [openKeys] = useState<Array<string>>([pathArr[0]])
  const [selectKeys] = useState<Array<string>>(pathArr)

  const handleSelectMenu: MenuProps['onClick'] = (res) => {
    // console.log('handleSelectMenu >>>>>  ', res)
    const { keyPath } = res
    navigate(`/${keyPath.reverse().join('/')}`)
  }

  return (
    <Menu
      defaultOpenKeys={openKeys}
      defaultSelectedKeys={selectKeys}
      theme='dark'
      mode='inline'
      items={items}
      onClick={handleSelectMenu}
    ></Menu>
  )
}
