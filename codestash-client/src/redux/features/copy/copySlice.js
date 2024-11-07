import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    copied: false,
    code: "",
};

const copySlice = createSlice({
    name: "copy",
    initialState,
    reducers: {
        setCopied: (state, action) => {
            state.copied = action.payload;
        },
        setCode: (state, action) => {
            state.code = action.payload;
        },
    },
});

export const { setCopied, setCode } = copySlice.actions;

export default copySlice.reducer;