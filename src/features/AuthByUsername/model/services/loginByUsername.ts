import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localstorage";

interface LoginByUsernameArgs {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameArgs,
    { rejectValue: string }
>("login/loginByUsername", async (authData, thunk) => {
    try {
        const response = await axios.post<User>(
            "http://localhost:8000/login",
            authData,
        );
        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        thunk.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        return thunk.rejectWithValue("Вы ввели неверный логин или пароль");
    }
});
