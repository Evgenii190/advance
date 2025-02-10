import classNames from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import s from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <Button className={s.links} onClick={onToggleModal}>
                {t("Войти")}
            </Button>
            <Modal onClose={onToggleModal} isOpen={isModalOpen}>
                Войти в аккаунт
            </Modal>
        </div>
    );
};
