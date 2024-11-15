import { configureStore } from '@reduxjs/toolkit'
import codeModalReducer from '../redux/features/code-modal/codeModalSlice'
import copyReducer from '../redux/features/copy/copySlice'

import buttonsApi from './features/buttons/buttonsApi';

const store = configureStore({
  reducer: {
    codeModal: codeModalReducer,
    copy: copyReducer,
    [buttonsApi.reducerPath]: buttonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(buttonsApi.middleware)
  },
})

export default store;
