import { configureStore } from '@reduxjs/toolkit'
import codeModalReducer from '../redux/features/code-modal/codeModalSlice'
import copyReducer from '../redux/features/copy/copySlice'

const store = configureStore({
  reducer: {
    codeModal: codeModalReducer,
    copy: copyReducer,
  },
})

export default store;
