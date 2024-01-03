import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null
  },
  reducers: {
    setToken: (state,{payload}) => {
      console.log('setToken >>>>>  ', payload)
      state.token = payload
      sessionStorage.setItem("token", JSON.stringify(payload));
    },
    removeToken: (state) => {
      console.log('removeToken >>>>>  ')
      state.token = null
      sessionStorage.removeItem('token')
    }
  }
})

export const { setToken,removeToken }  = userSlice.actions

export default userSlice