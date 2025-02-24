import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { userReducer } from "entities/User";
import { StateSchema } from "./StateSchema";

import { createReducerManager } from "./reducerManager";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDegetMiddleware) =>
            getDegetMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
