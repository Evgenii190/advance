import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { StoreDecorator } from "shared/config/storybookDecorators/storeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

export default {
    title: "pages/MainPage",
    component: MainPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => {
    return <MainPage />;
};

export const light = Template.bind({});
light.decorators = [StoreDecorator({})];

export const dark = Template.bind({});
dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
