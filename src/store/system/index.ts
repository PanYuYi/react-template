import { createSlice } from '@reduxjs/toolkit'

const systemSlice = createSlice({
  name: 'system',
  initialState: {
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
            key: 'dataSet',
            icon: '',
            label: '数据集',
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
            key: 'about',
            icon: '',
            label: '关于',
          },
        ],
      },
    ],
  },
  reducers: {
    setMenu: (state, { payload }) => {
      console.log('setMenu >>>>>  ', payload)
      state.menus = payload
    },
  },
})

export const { setMenu } = systemSlice.actions

export default systemSlice
