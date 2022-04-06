import { configureStore } from "@reduxjs/toolkit";
import tokenSliceReducer  from "./reduxSlice/slice.js";

export default configureStore({
    reducer: {
        token: tokenSliceReducer
    }
});