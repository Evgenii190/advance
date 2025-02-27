import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";

import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";
import { SideBarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SideBarItemType[] = [
        {
            path: RoutePaths.main,
            Icon: MainIcon,
            text: "Главная",
        },
        {
            path: RoutePaths.about,
            Icon: AboutIcon,
            text: "О сайте",
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: `${RoutePaths.profile}${userData?.id}`,
                Icon: ProfileIcon,
                text: "Профиль",
                authOnly: true,
            },
            {
                path: RoutePaths.articles,
                Icon: ArticleIcon,
                text: "Статьи",
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
