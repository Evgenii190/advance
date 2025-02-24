import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { StoreDecorator } from "shared/config/storybookDecorators/storeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ProfilePage from "./ProfilePage";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => {
    return <ProfilePage {...(args as object)} />;
};

export const light = Template.bind({});
light.decorators = [StoreDecorator({})];

export const dark = Template.bind({});
dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
