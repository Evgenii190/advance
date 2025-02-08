import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Loader } from "./Loader";

export default {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => {
    return <Loader {...args} />;
};

export const light = Template.bind({});

export const dark = Template.bind({});
dark.decorators = [ThemeDecorator(Theme.DARK)];
