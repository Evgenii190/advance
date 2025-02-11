import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { LoginForm } from "./LoginForm";

export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {
    return <LoginForm {...(args as object)} />;
};

export const light = Template.bind({});
light.args = {};

export const dark = Template.bind({});
dark.args = {};
dark.decorators = [ThemeDecorator(Theme.DARK)];
