import { createSlice } from '@reduxjs/toolkit'

import { MenusModel } from '@/store/types'

interface StateProps {
  menus: MenusModel[]
}

const state: StateProps = {
  menus: [
    {
      key: 'dataCenter',
      icon: '',
      label: '数据中心',
      children: [
        {
          key: 'welcome',
          icon: '',
          label: '欢迎',
        },
        {
          key: 'dataPacket',
          icon: '',
          label: '数据包',
          children: [
            {
              key: 'dataSet',
              hidden: true,
              icon: '',
              label: '数据集',
              children: [
                {
                  key: 'dataSetDetails',
                  hidden: true,
                  icon: '',
                  label: '数据集详情',
                },
              ],
            },
          ],
        },
        {
          key: 'dataSource',
          icon: '',
          label: '数据源',
        },
      ],
    },
    {
      key: 'system',
      icon: '',
      label: '系统',
      children: [
        {
          key: 'baseSetting',
          icon: '',
          label: '基础设置',
        },
        {
          key: 'menuManage',
          icon: '',
          label: '菜单管理',
        },
        {
          key: 'roleManage',
          icon: '',
          label: '角色管理',
        },
        {
          key: 'userManage',
          icon: '',
          label: '用户管理',
        },
        {
          key: 'about',
          icon: '',
          label: '关于',
        },
      ],
    },
  ],
}

const systemSlice = createSlice({
  name: 'system',
  initialState: state,
  reducers: {
    setMenu: (state, { payload }) => {
      console.log('setMenu >>>>>  ', payload)
      state.menus = payload
    },
  },
})

export const { setMenu } = systemSlice.actions

export default systemSlice
