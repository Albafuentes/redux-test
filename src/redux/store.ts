import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentReducer";

export const storeRedux =  configureStore({
    reducer: {
        contentReducer
    }
    //middleware: [],
    //devTools: process.env.NODE_ENV!== 'production',
})

export type RootState = ReturnType<typeof storeRedux.getState>
export type AppDispatch = typeof storeRedux.dispatch
