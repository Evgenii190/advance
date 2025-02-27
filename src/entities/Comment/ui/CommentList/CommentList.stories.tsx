import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
    title: "entities/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => {
    return <CommentList {...args} />;
};

export const primary = Template.bind({});
primary.args = {};
