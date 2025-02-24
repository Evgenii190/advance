import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarImg from "./storybook.jpg";

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
    return <Avatar {...args} />;
};

export const primary = Template.bind({});
primary.args = {
    size: 150,
    src: AvatarImg,
};

export const small = Template.bind({});
small.args = {
    size: 50,
    src: AvatarImg,
};
