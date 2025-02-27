import classNames from "shared/lib/classNames/classNames";
import { Suspense } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { Loader } from "shared/ui/Loader/Loader";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import s from "./LoginModal.module.scss";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            className={classNames(s.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
