import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
    title: "shared/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => {
    return <ThemeSwitcher {...args} />;
};

export const light = Template.bind({});

export const dark = Template.bind({});
dark.decorators = [ThemeDecorator(Theme.DARK)];
