import { createSlice } from '@reduxjs/toolkit'

const systemSlice = createSlice({
  name: 'system',
  initialState: {
    menus: [
      {
        key: 'home',
        icon: '',
        label: 'Home',
      },
      {
        key: 'welcome',
        icon: '',
        label: '欢迎',
      },
      {
        key: 'about',
        icon: '',
        label: '关于',
      },
    ]
  },
  reducers: {
    setMenu: (state,{payload}) =>{
      console.log('setMenu >>>>>  ', payload)
      state.menus = payload
    }
  }
})

export const { setMenu } = systemSlice.actions

export default systemSlice