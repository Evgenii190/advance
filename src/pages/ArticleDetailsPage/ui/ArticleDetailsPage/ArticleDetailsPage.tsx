import classNames from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import {
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/getArticleDetails";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";
import {
    articleDetailsCommentsReducer,
    getArticlesComments,
} from "../../model/articleDetailsSlice";
import s from "./ArticleDetailsPage.module.scss";

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const dispatch = useAppDispatch();

    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticlesComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsIsLoading);
    const commentsError = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
                <p>Article not found</p>
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(s.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={s.commentTitle} title="Комментарии" />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
