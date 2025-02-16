import classNames from "shared/lib/classNames/classNames";
import s from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = ({ className, title, text, theme }: TextProps) => {
    return (
        <div className={classNames(s.Text, { [s[theme]]: theme }, [className])}>
            {title && <h2 className={s.title}>{title}</h2>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
};
