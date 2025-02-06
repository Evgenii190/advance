import classNames from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink
                    to={`/`}
                    className={s.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Главная
                </AppLink>
                <AppLink to={`/about`} theme={AppLinkTheme.SECONDARY}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
