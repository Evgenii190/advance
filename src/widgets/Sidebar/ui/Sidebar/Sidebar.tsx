import classNames from "shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSizes, ThemeButton } from "shared/ui/Button/Button";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import s from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => {
            return !prev;
        });
    };

    return (
        <div
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <Button
                type="button"
                theme={ThemeButton.BACKGRAUND_INVERTED}
                square
                size={ButtonSizes.L}
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={s.collapseBtn}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={s.items}>
                {SidebarItemsList.map((item) => {
                    return (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    );
                })}
            </div>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={classNames(s.lang)}
                    short={collapsed}
                />
            </div>
        </div>
    );
});
