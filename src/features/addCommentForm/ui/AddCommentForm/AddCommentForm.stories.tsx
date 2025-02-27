import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StoreDecorator } from "shared/config/storybookDecorators/storeDecorator";
import AddCommentForm from "./AddCommentForm";

export default {
    title: "features/AddCommentForm",
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => {
    return <AddCommentForm {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    onSendComment: action("onSendComment"),
};
primary.decorators = [
    StoreDecorator({ addCommentForm: { text: "Text form" } }),
];
