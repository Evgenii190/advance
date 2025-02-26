import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../types/article";

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    "articleDetails/fetchArticleById",
    async (acticleId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article>(
                `/articles/${acticleId}`,
            );

            if (!response.data) {
                throw new Error("");
            }

            return response.data;
        } catch (e) {
            return rejectWithValue("");
        }
    },
);
