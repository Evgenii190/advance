import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotFoundPage } from "./NotFoundPage";

export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => {
    return <NotFoundPage {...args} />;
};

export const light = Template.bind({});
light.args = {};

export const dark = Template.bind({});
dark.decorators = [ThemeDecorator(Theme.DARK)];
dark.args = {};
