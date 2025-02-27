import classNames from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleList, ArticleView } from "entities/Article";
import s from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(s.ArticlesPage, {}, [className])}>
            <ArticleList view={ArticleView.BIG} articles={[]} isLoading />
        </div>
    );
};

export default memo(ArticlesPage);
