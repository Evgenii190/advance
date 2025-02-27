import classNames from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import { Card } from "shared/ui/Card/Card";
import { useHover } from "shared/lib/hooks/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button/Button";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { useNavigate } from "react-router-dom";
import s from "./ArticleListItem.module.scss";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo(
    ({ className, article, view }: ArticleListItemProps) => {
        const [isHover, bindHover] = useHover();
        const navigate = useNavigate();

        const onOpenArticle = useCallback(() => {
            navigate(RoutePaths.article_details + article.id);
        }, [navigate, article.id]);

        const types = (
            <Text text={article.type.join(", ")} className={s.types} />
        );

        const views = (
            <>
                <Text text={String(article.views)} className={s.views} />
                <Icon Svg={EyeIcon} />
            </>
        );

        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleTextBlock;

            return (
                <div
                    className={classNames(s.ArticleListItem, {}, [
                        className,
                        s[view],
                    ])}
                >
                    <Card>
                        <div className={s.header}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text
                                className={s.username}
                                text={article.user.username}
                            />
                            <Text className={s.date} text={article.createdAt} />
                        </div>
                        <Text className={s.title} title={article.title} />
                        {types}
                        <img
                            className={s.img}
                            src={article.img}
                            alt={article.title}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                className={s.textBlock}
                                block={textBlock}
                            />
                        )}
                        <div className={s.footer}>
                            <Button onClick={onOpenArticle}>
                                Читать далее
                            </Button>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(s.ArticleListItem, {}, [
                    className,
                    s[view],
                ])}
                {...bindHover}
                onClick={onOpenArticle}
            >
                <Card className={s.card}>
                    <div className={s.imageWrapper}>
                        <img className={s.img} src={article.img} alt="" />
                        <Text text={article.createdAt} className={s.date} />
                    </div>
                    <div className={s.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={s.title} />
                </Card>
            </div>
        );
    },
);
