import { I18nextProvider } from "react-i18next";
import { Story } from "@storybook/react";
import "app/styles/index.scss";
import i18n from "../i18n/i18n";

export const TranslationDecorator = (StoryComponent: Story) => {
    return (
        <I18nextProvider i18n={i18n}>
            <StoryComponent />
        </I18nextProvider>
    );
};
