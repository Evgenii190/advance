import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybookDecorators/storeDecorator";
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

export const dark = Template.bind({});
dark.args = {};
dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: "username", password: "password" },
    }),
];

export const error = Template.bind({});
error.args = {};
error.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: "username",
            password: "password",
            error: "Error",
        },
    }),
];

export const loading = Template.bind({});
loading.args = {};
loading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: "username",
            password: "password",
            isLoading: true,
        },
    }),
];

export const light = Template.bind({});
light.args = {};
light.decorators = [
    StoreDecorator({
        loginForm: { username: "username", password: "password" },
    }),
];
