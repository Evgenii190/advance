import classNames from "shared/lib/classNames/classNames";
import s from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, onClick, ...otherProps } = props;

    return (
        <button
            className={classNames(s.Button, {}, [className, s[theme]])}
            {...otherProps}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
