import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCommentFormSchema } from "./types/addCommentForm";

const initialState: addCommentFormSchema = {
    text: "",
    error: undefined,
};

const addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(loginByUsername.pending, (state) => {
    //         state.error = undefined;
    //         state.isLoading = true;
    //     });
    //     builder.addCase(loginByUsername.fulfilled, (state) => {
    //         state.error = undefined;
    //         state.isLoading = false;
    //     });
    //     builder.addCase(loginByUsername.rejected, (state, action) => {
    //         state.error = action.payload;
    //         state.isLoading = false;
    //     });
    // },
});

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { actions: addCommentFormActions } = addCommentFormSlice;
