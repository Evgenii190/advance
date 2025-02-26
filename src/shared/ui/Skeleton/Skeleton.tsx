import classNames from "shared/lib/classNames/classNames";
import { memo } from "react";
import s from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    border?: string;
}

export const Skeleton = memo(
    ({ className, width, height, border }: SkeletonProps) => {
        return (
            <div
                className={classNames(s.Skeleton, {}, [className])}
                style={{ width, height, borderRadius: border }}
            />
        );
    },
);
