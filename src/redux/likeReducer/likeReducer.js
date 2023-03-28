import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     like: 0
}

const likeReducer = createSlice({
     name: 'likeReducer',
     initialState,
     reducers: {
          pushLike: (state,action) => {
               state.like += action.payload
          }
     }
});

export const { pushLike } = likeReducer.actions

export default likeReducer.reducer