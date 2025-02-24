import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "./types/loginSchema";
import { loginByUsername } from "./services/loginByUsername";

const initialState: LoginSchema = {
    password: "",
    username: "",
    isLoading: false,
    error: "",
};

const userSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, { payload }: PayloadAction<string>) => {
            state.username = payload;
        },
        setPassword: (state, { payload }: PayloadAction<string>) => {
            state.password = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.error = undefined;
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { reducer: loginReducer } = userSlice;
export const { actions: loginActions } = userSlice;
