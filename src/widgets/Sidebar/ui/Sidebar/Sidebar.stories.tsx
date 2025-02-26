import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { StoreDecorator } from "shared/config/storybookDecorators/storeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";

export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
    return <Sidebar {...args} />;
};

export const light = Template.bind({});
light.args = {};
light.decorators = [StoreDecorator({ user: { authData: {} } })];

export const dark = Template.bind({});
dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
];

export const noAuth = Template.bind({});
noAuth.args = {};
noAuth.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: undefined } }),
];
