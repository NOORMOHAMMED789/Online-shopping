import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { useReducer } from "./user-slice"
import shoppingReducer from './shopping-slice'


export const store = configureStore({
    reducer: {
        useReducer,
        shoppingReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

setupListeners(store.dispatch)

export const RootState = store.getState;
export const AppDispatch = store.dispatch;