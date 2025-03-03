import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleViewSelector } from "./ArticleViewSelector";

export default {
    title: "shared/ArticleViewSelector",
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => {
    return <ArticleViewSelector {...args} />;
};

export const primary = Template.bind({});
primary.args = {};
