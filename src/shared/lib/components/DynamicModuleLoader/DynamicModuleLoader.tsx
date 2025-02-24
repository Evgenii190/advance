import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/ui/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
    children,
    reducers,
    removeAfterUnmount,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: [StateSchemaKey, Reducer]) => {
                store.reducerManager.add(name, reducer);
            },
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name]: [StateSchemaKey, Reducer]) => {
                        store.reducerManager.remove(name);
                    },
                );
            }
        };
        // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line
    return <>{children}</>;
};
