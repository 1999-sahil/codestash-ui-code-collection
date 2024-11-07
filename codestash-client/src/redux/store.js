import { configureStore } from '@reduxjs/toolkit'
import codeModalReducer from '../redux/features/code-modal/codeModalSlice'

const store = configureStore({
  reducer: {
    codeModal: codeModalReducer,
  },
})

export default store;
