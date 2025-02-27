import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";
import { ArticleDetailsCommentsSchema } from "./model/types/articleDetailsCommentsSchema";
import { fetchCommentsByArticleId } from "./model/services/fetchCommentsByArticleId";

export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
    ArticleDetailsCommentsSchema,
    fetchCommentsByArticleId,
};
