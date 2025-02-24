import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/ui/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

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
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: [StateSchemaKey, Reducer]) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            },
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name]: [StateSchemaKey, Reducer]) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    },
                );
            }
        };
        // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line
    return <>{children}</>;
};
