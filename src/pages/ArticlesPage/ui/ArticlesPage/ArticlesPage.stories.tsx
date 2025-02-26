import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";

export default {
    title: "pages/ArticlesPage",
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => {
    return <ArticlesPage {...args} />;
};

export const primary = Template.bind({});
primary.args = {};
