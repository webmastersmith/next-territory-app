import { configureStore } from '@reduxjs/toolkit'
import ownerReducer from './ownerSlice'

export const store = configureStore({
  reducer: {
    ownerReducer, //state.ownerReducer.owners
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
