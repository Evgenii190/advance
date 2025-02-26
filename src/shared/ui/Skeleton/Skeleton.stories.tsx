import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Skeleton } from "./Skeleton";

export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => {
    return <Skeleton {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    width: 100,
    height: 100,
};

export const circle = Template.bind({});
circle.args = {
    border: "50%",
    width: 100,
    height: 100,
};
