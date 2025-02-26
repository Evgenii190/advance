import { articleDetailsReducer } from "./articleSlice";
import { fetchArticleById } from "./services/fetchArticleById";
import { Article } from "./types/article";
import { ArticleDetailsSchema } from "./types/articleDetailsSchema";

describe("articleSlice.test", () => {
    it("test fetchArticle pending", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: "123",
            isLoading: false,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({ error: undefined, isLoading: true });
    });

    it("test fetchArticle fulfilled", () => {
        const data: DeepPartial<Article> = { id: "1", title: "test" };
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: "123",
            isLoading: true,
            data: { id: "1", title: "test" },
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data as Article, "", ""),
            ),
        ).toEqual({ error: undefined, isLoading: false, data });
    });
});
