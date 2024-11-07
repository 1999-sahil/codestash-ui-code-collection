import { createSlice } from "@reduxjs/toolkit";

export const codeModalSlice = createSlice({
    name: "codeModal",
    initialState: {
        isOpen: false,
        code: "",
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.code = action.payload;  // code content to show in the modal
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.code = "";
        },
    },
});

export const { openModal, closeModal } = codeModalSlice.actions;

export default codeModalSlice.reducer;