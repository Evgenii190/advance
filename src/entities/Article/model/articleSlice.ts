import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "./types/articleDetailsSchema";
import { fetchArticleById } from "./services/fetchArticleById";
import { Article } from "./types/article";

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const articleDetailsSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchArticleById.fulfilled,
            (state, action: PayloadAction<Article>) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            },
        );
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { reducer: articleDetailsReducer } = articleDetailsSlice;
export const { actions: articleDetailsActions } = articleDetailsSlice;
