import classNames from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { useCallback, useState } from "react";
import s from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsLoginModalOpen(true);
    }, []);

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <Button
                className={s.links}
                onClick={onShowModal}
                theme={ThemeButton.BACKGRAUND}
            >
                {t("Войти")}
            </Button>
            <LoginModal isOpen={isLoginModalOpen} onClose={onCloseModal} />
        </div>
    );
};
