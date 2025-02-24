import { SVGProps, VFC } from "react";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SideBarItemType[] = [
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
    {
        path: RoutePaths.profile,
        Icon: ProfileIcon,
        text: "Профиль",
    },
];
