import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";
import { loginReducer } from "features/AuthByUsername/model/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
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
