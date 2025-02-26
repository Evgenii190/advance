import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Code } from "./Code";

export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => {
    return <Code {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    text: "code",
};
