import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";

export default {
    title: "widgets/PageError",
    component: PageError,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => {
    return <PageError {...args} />;
};

export const light = Template.bind({});

export const dark = Template.bind({});
dark.decorators = [ThemeDecorator(Theme.DARK)];
