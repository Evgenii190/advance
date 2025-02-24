import { createReduxStore, AppDispatch } from "./ui/config/store";
import { StoreProvider } from "./ui/StoreProvider";
import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
} from "./ui/config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    AppDispatch,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
};
