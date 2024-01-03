import { configureStore, combineSlices } from '@reduxjs/toolkit'
import userSlice from './user'
import systemSlice from './system'

const allSlice = combineSlices(userSlice,systemSlice)

const store = configureStore({
  reducer:allSlice
})

export type AllState = ReturnType<typeof store.getState>

export {store}