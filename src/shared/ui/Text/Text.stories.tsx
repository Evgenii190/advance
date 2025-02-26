import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
    return <Text {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
    title: "Title",
    text: "Text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title",
    text: "Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: "Title",
    text: "Text",
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: "Title",
    text: "Text",
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const titleLight = Template.bind({});
titleLight.args = {
    title: "Title",
};

export const titleDark = Template.bind({});
titleDark.args = {
    title: "Title",
};
titleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const textLight = Template.bind({});
textLight.args = {
    text: "Text",
};

export const textDark = Template.bind({});
textDark.args = {
    text: "Text",
};
textDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: "Title",
    text: "Text",
    size: TextSize.L,
};
