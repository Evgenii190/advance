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

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    aling?: TextAling;
}

export const Text = ({
    className,
    title,
    text,
    aling = TextAling.LEFT,
    theme = TextTheme.PRIMARY,
}: TextProps) => {
    return (
        <div
            className={classNames(
                s.Text,
                { [s[theme]]: theme, [s[aling]]: aling },
                [className],
            )}
        >
            {title && <h2 className={s.title}>{title}</h2>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
};
