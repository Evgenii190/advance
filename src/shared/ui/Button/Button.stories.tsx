import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonSizes, ThemeButton } from "./Button";

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

export const buttonM = Template.bind({});
buttonM.args = {
    children: "Button",
    theme: ThemeButton.BACKGRAUND_INVERTED,
    size: ButtonSizes.M,
};

export const buttonL = Template.bind({});
buttonL.args = {
    children: "Button",
    theme: ThemeButton.BACKGRAUND_INVERTED,
    size: ButtonSizes.L,
};

export const buttonXL = Template.bind({});
buttonXL.args = {
    children: "Button",
    theme: ThemeButton.BACKGRAUND_INVERTED,
    size: ButtonSizes.XL,
};

export const backgorundTheme = Template.bind({});
backgorundTheme.args = {
    children: "Button",
    theme: ThemeButton.BACKGRAUND,
    size: ButtonSizes.M,
};

export const backgorundInvertedTheme = Template.bind({});
backgorundInvertedTheme.args = {
    children: "Button",
    theme: ThemeButton.BACKGRAUND_INVERTED,
    size: ButtonSizes.M,
};

export const backgorundSquareM = Template.bind({});
backgorundSquareM.args = {
    children: ">",
    theme: ThemeButton.BACKGRAUND_INVERTED,
    size: ButtonSizes.M,
    square: true,
};

export const backgorundSquareL = Template.bind({});
backgorundSquareL.args = {
    children: ">",
    theme: ThemeButton.BACKGRAUND_INVERTED,
    size: ButtonSizes.L,
    square: true,
};

export const backgorundSquareXL = Template.bind({});
backgorundSquareXL.args = {
    children: ">",
    theme: ThemeButton.BACKGRAUND_INVERTED,
    size: ButtonSizes.XL,
    square: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Button",
    theme: ThemeButton.OUTLINE,
    size: ButtonSizes.XL,
    disabled: true,
};
