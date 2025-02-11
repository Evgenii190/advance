import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";

export const StoreDecorator =
    (inititalState: DeepPartial<StateSchema>) => (StoreComponent: Story) => {
        return (
            <StoreProvider initialState={inititalState}>
                <StoreComponent />
            </StoreProvider>
        );
    };
