import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybookDecorators/styleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybookDecorators/themeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybookDecorators/roterDecorator";
import { TranslationDecorator } from "../../src/shared/config/storybookDecorators/translationDecorator";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator("app_light_theme"));
addDecorator(RouterDecorator);
