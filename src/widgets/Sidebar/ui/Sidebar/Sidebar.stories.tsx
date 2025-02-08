import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
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

export const dark = Template.bind({});
dark.decorators = [ThemeDecorator(Theme.DARK)];
