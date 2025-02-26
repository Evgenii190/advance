import { memo } from "react";
import classNames from "shared/lib/classNames/classNames";
import { ArticleImageBlock } from "entities/Article/model/types/article";
import { Text, TextAling } from "shared/ui/Text/Text";
import s from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        return (
            <div
                className={classNames(s.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img className={s.img} src={block.src} alt={block.title} />
                {block.title && (
                    <Text title={block.title} aling={TextAling.CENTER} />
                )}
            </div>
        );
    },
);
