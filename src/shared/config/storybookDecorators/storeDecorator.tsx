import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";
import { articleDetailsReducer } from "entities/Article/model/articleSlice";
import { profileReducer } from "entities/Profile";
import { addCommentFormReducer } from "features/addCommentForm/model/addCommentFormSlice";
import { loginReducer } from "features/AuthByUsername/model/loginSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/articleDetailsSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
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
