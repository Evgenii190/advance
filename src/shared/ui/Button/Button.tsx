import classNames from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        square = false,
        size = ButtonSizes.M,
        onClick,
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
            {...otherProps}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
