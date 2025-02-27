import classNames from "shared/lib/classNames/classNames";
import { HTMLAttributes, ReactNode } from "react";
import s from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = ({ className, children, ...other }: CardProps) => {
    return (
        <div className={classNames(s.Card, {}, [className])} {...other}>
            {children}
        </div>
    );
};
