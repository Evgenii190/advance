import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18n from "shared/config/i18n/i18nForTests";

export default function RenderComponent(
    Component: ReactNode,
    { route = "/" }: { route?: string } = {},
) {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>{Component}</I18nextProvider>
        </MemoryRouter>,
    );
}
