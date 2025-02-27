import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

export default {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    return <Input {...args} />;
};

export const light = Template.bind({});
light.args = {
    value: "lorem",
    placeholder: "Введите текст",
};

export const dark = Template.bind({});
dark.args = {
    value: "lorem",
    placeholder: "Введите текст",
};
dark.decorators = [ThemeDecorator(Theme.DARK)];
