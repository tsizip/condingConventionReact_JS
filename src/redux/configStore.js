import {configureStore} from '@reduxjs/toolkit'
import likeReducer from './likeReducer/likeReducer'

export const store = configureStore({
     reducer: {
          //noi khai bao cac reducer
          handleLike: likeReducer
     }
})


