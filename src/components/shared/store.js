import {configureStore } from '@reduxjs/toolkit'
import Database from './DatabaseSlice'
export default configureStore({
  reducer: {
    Database
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })

})
