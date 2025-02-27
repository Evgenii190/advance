import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";

export default {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
    return <Card {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    children: <p>123123123</p>,
};
