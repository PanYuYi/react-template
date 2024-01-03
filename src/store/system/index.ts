import { createSlice } from '@reduxjs/toolkit'

const systemSlice = createSlice({
  name: 'system',
  initialState: {
    menus: [
      {
        key: 'welcome',
        icon: '',
        label: '欢迎',
      },
      {
        key: 'home',
        icon: '',
        label: 'Home',
        children: [
          {
            key: 'home1',
            icon: '',
            label: 'Home1',
          },
        ],
      },

      {
        key: 'about',
        icon: '',
        label: '关于',
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
