import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '@/store/slice/counterSlice'


/* 
counterSlice ko reducer mai pass kr dena h
*/
export const store = configureStore({
  reducer: {counterSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch







/* 
1) redux toolkit k web site open kren gy
2) next hm 2 pkge install kren gy (npm install @reduxjs/toolkit, npm install react-redux)
3) website se same code ko copy kr k src /store/store.ts k file bna k paste kren.
4) src/app/slice/counterSlice.ts k file khud create kren gy 
5) 

*/