import classNames from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import s from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGRAUND = "background",
    BACKGRAUND_INVERTED = "backgroundInverted",
}

export enum ButtonSizes {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSizes;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        square = false,
        size = ButtonSizes.M,
        onClick,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [s.square]: square,
    };

    return (
        <button
            className={classNames(s.Button, mods, [
                className,
                s[theme],
                s[size],
            ])}
            type="button"
            disabled={disabled}
            {...otherProps}
            onClick={onClick}
        >
            {children}
        </button>
    );
});
