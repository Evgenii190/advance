import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
    title: "entities/comment/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => {
    return <CommentList {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    comments: [
        {
            id: "1",
            text: "text",
            user: { id: "1", username: "username", avatar: "" },
        },
        {
            id: "1",
            text: "text",
            user: { id: "1", username: "username", avatar: "" },
        },
        {
            id: "1",
            text: "text",
            user: { id: "1", username: "username", avatar: "" },
        },
    ],
};
primary.decorators = [];

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [],
    isLoading: true,
};
