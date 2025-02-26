import classNames from "shared/lib/classNames/classNames";
import s from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextAling {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    aling?: TextAling;
    size?: TextSize;
}

export const Text = ({
    className,
    title,
    text,
    aling = TextAling.LEFT,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,
}: TextProps) => {
    return (
        <div
            className={classNames(
                s.Text,
                { [s[theme]]: theme, [s[aling]]: aling, [s[size]]: size },
                [className],
            )}
        >
            {title && <h2 className={s.title}>{title}</h2>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
};
