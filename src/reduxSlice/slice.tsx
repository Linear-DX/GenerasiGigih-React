import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        value: undefined
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setAccessToken } = tokenSlice.actions;
export default tokenSlice.reducer;