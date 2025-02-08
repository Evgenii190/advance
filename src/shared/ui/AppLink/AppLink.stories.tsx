import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => {
    return <AppLink {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    children: "AppLink",
    theme: AppLinkTheme.PRIMARY,
};

export const secondary = Template.bind({});
secondary.args = {
    children: "AppLink",
    theme: AppLinkTheme.SECONDARY,
};

export const primaryDark = Template.bind({});
primaryDark.args = {
    children: "AppLink",
    theme: AppLinkTheme.PRIMARY,
};
primaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const secondaryDark = Template.bind({});
secondaryDark.args = {
    children: "AppLink",
    theme: AppLinkTheme.SECONDARY,
};
secondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
