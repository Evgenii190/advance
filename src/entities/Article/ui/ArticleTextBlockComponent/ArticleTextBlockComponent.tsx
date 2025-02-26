import classNames from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleTextBlock } from "entities/Article/model/types/article";
import { Text } from "shared/ui/Text/Text";
import s from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => {
        return (
            <div
                className={classNames(s.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <Text className={s.title} title={block.title} />
                )}
                {block.paragraphs.map((parag, index) => {
                    return (
                        <Text
                            className={s.paragraph}
                            text={parag}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    },
);
