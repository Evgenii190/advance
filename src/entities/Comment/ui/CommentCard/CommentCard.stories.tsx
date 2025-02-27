import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentCard } from "./CommentCard";

export default {
    title: "entities/Comment/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => {
    return <CommentCard {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    comment: {
        id: "1",
        text: "text",
        user: { id: "1", username: "username", avatar: "" },
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    comment: {
        id: "1",
        text: "text",
        user: { id: "1", username: "username", avatar: "" },
    },
    isLoading: true,
};
