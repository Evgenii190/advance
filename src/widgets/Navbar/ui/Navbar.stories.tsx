import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { StoreDecorator } from "shared/config/storybookDecorators/storeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";

export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
    return <Navbar {...args} />;
};

export const light = Template.bind({});
light.decorators = [StoreDecorator({})];

export const dark = Template.bind({});
dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const auth = Template.bind({});
auth.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: { username: "123" } } }),
];
