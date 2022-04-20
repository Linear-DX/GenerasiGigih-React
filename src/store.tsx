import { configureStore } from "@reduxjs/toolkit";
import tokenSliceReducer  from "./reduxSlice/slice";

export const store = configureStore({
    reducer: {
        token: tokenSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>