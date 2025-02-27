import classNames from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
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
import { AddCommentForm } from "features/addCommentForm";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { Button } from "shared/ui/Button/Button";
import { addCommentForArticle } from "../../model/services/addCommentForArticle";
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

    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    const backToList = useCallback(() => {
        navigate(RoutePaths.articles);
    }, [navigate]);

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
                <Button onClick={backToList}>Назад к списку</Button>
                <ArticleDetails id={id} />
                <Text className={s.commentTitle} title="Комментарии" />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
