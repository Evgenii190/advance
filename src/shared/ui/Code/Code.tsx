import classNames from "shared/lib/classNames/classNames";
import { ReactNode, useCallback } from "react";
import CopyIcon from "shared/assets/icons/copy-20-20.svg";
import s from "./Code.module.scss";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(s.Code, {}, [className])}>
            <Button className={s.btn} onClick={onCopy}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
};
