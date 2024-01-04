import { Menu } from 'antd'
import { useSelector } from 'react-redux'
import { AllState } from '@/store/index'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Menus() {
  const navigate = useNavigate()
  const items = useSelector((state: AllState) => state.system.menus)

  const [openKeys, setOpenKeys] = useState<Array<string>>([items[0]?.key])
  const [selectKeys, setSelectKeys] = useState<Array<string>>([items[0]?.key, items[0]?.children?.[0]?.key])

  const handleSelectMenu = ({ keyPath }) => {
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
    />
  )
}
