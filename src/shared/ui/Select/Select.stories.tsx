import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    return <Select {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    label: "some text",
    options: [
        { content: "some text", value: "123" },
        { content: "some text2", value: "1234" },
        { content: "some text3", value: "1235" },
    ],
};
