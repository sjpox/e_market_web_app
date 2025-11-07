import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/Product'

const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store

export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch