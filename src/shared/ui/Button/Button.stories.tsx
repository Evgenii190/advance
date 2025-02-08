import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} />;
};

export const Clear = Template.bind({});
Clear.args = {
    children: "Button",
    theme: ThemeButton.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
ClearDark.args = {
    children: "Button",
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: "Outlined",
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlineDark.args = {
    children: "Outlined",
    theme: ThemeButton.OUTLINE,
};
