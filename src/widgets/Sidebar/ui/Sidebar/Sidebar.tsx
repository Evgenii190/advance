import classNames from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import s from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => { return !prev; });
    };

    return (
        <div
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button type="button" theme={ThemeButton.CLEAR} onClick={onToggle}>
                toggle
            </Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classNames(s.lang)} />
            </div>
        </div>
    );
};
