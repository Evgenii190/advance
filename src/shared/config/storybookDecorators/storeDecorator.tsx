import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (
        inititalState: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
    (StoreComponent: Story) => {
        return (
            <StoreProvider
                initialState={inititalState}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoreComponent />
            </StoreProvider>
        );
    };
