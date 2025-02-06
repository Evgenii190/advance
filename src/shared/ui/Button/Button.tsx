import classNames from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import s from "./Button.module.scss";

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
            type="button"
            {...otherProps}
            onClick={onClick}
        >
            {children}
            asd
        </button>
    );
};
