import classNames from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import s from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsLoginModalOpen(true);
    }, []);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(s.navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.BACKGRAUND}
                    className={s.links}
                    onClick={onLogout}
                >
                    {t("Выйти")}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <Button
                className={s.links}
                onClick={onShowModal}
                theme={ThemeButton.BACKGRAUND}
            >
                {t("Войти")}
            </Button>
            {isLoginModalOpen && (
                <LoginModal isOpen={isLoginModalOpen} onClose={onCloseModal} />
            )}
        </div>
    );
});
