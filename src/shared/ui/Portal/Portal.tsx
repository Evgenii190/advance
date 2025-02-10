import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode;
    to?: Element;
}

export const Portal = ({ children, to = document.body }: PortalProps) => {
    return createPortal(children, to);
};
