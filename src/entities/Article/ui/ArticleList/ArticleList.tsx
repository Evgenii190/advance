import classNames from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Article, ArticleView } from "../../model/types/article";
import s from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo(
    ({
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    }: ArticleListProps) => {
        if (isLoading) {
            return (
                <div
                    className={classNames(s.ArticleList, {}, [
                        className,
                        s[view],
                    ])}
                >
                    {new Array(view === ArticleView.SMALL ? 9 : 3)
                        .fill(0)
                        .map((item, index) => {
                            return (
                                <ArticleListItemSkeleton
                                    key={index}
                                    view={view}
                                />
                            );
                        })}
                </div>
            );
        }

        const renderArticle = (article: Article) => (
            <ArticleListItem key={article.id} article={article} view={view} />
        );

        return (
            <div
                className={classNames(s.ArticleList, {}, [className, s[view]])}
            >
                {articles.length ? articles.map(renderArticle) : null}
            </div>
        );
    },
);
