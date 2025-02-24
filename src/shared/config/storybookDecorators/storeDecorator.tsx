import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (inititalState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
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
