import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice.js'
export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})