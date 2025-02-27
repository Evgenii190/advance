import { VFC, SVGProps } from "react";

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
