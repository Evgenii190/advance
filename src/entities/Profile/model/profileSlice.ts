import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileSchema } from "./types/profile";

const initialState: ProfileSchema = {
    isLoading: true,
    readonly: false,
    error: undefined,
    data: undefined,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
