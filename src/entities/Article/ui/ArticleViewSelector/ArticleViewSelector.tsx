import classNames from "shared/lib/classNames/classNames";
import { ArticleView } from "entities/Article/model/types/article";
import ListIcon from "shared/assets/icons/list-24-24.svg";
import TilesIcon from "shared/assets/icons/tiled-24-24.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import s from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    { view: ArticleView.SMALL, icon: TilesIcon },
    { view: ArticleView.BIG, icon: ListIcon },
];

export const ArticleViewSelector = ({
    className,
    view,
    onViewClick,
}: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(s.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => {
                return (
                    <Button
                        theme={ThemeButton.CLEAR}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon
                            className={classNames(
                                "",
                                { [s.notSelected]: viewType.view !== view },
                                [],
                            )}
                            Svg={viewType.icon}
                        />
                    </Button>
                );
            })}
        </div>
    );
};
