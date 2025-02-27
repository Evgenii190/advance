import classNames from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SideBarItemType } from "widgets/Sidebar/model/types/sidebar";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

import s from "./SidebarItem.module.scss";

interface SidebarItemProps {
    item: SideBarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(s.item, { [s.collapsed]: collapsed })}
        >
            <item.Icon className={s.icon} />
            <span className={s.link}>{item.text}</span>
        </AppLink>
    );
});
