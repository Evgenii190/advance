import classNames from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import { Button, ButtonSizes, ThemeButton } from "shared/ui/Button/Button";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import s from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
                <AppLink
                    to={RoutePaths.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={s.item}
                >
                    <MainIcon className={s.icon} />
                    <span className={s.link}>Главная</span>
                </AppLink>
                <AppLink
                    to={RoutePaths.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={s.item}
                >
                    <AboutIcon className={s.icon} />
                    <span className={s.link}>О сайте</span>
                </AppLink>
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
};
