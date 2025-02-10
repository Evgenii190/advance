import {
    MouseEvent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { ANIMATION_MODAL } from "shared/constants/modal";
import classNames from "shared/lib/classNames/classNames";
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import s from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = ({
    className,
    children,
    isOpen = false,
    onClose,
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_MODAL);
        }
    }, [onClose]);

    const contentHandler = (event: MouseEvent) => {
        event.stopPropagation();
    };

    const onKeyDown = useCallback(
        (ev: KeyboardEvent) => {
            if (ev.key === "Escape") {
                onCloseHandler();
            }
        },
        [onCloseHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div
                className={classNames(
                    s.Modal,
                    {
                        [s.opened]: isOpen,
                        [s.closing]: isClosing,
                    },
                    [className, s[theme]],
                )}
                onClick={onCloseHandler}
            >
                <div className={s.content} onClick={contentHandler}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
