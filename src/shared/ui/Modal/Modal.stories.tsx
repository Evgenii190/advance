import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    return <Modal {...args} />;
};

export const light = Template.bind({});
light.args = {
    isOpen: true,
    children:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.",
};

export const dark = Template.bind({});
dark.args = {
    isOpen: true,
    children:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.",
};
dark.decorators = [ThemeDecorator(Theme.DARK)];
