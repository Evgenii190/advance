import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybookDecorators/themeDecorator";
import { StoreDecorator } from "shared/config/storybookDecorators/storeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AvatarImg from "shared/assets/tests/storybook.jpg";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

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
light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: "admin",
                lastname: "admin",
                age: 22,
                avatar: AvatarImg,
                country: Country.Armenia,
                city: "Yerevan",
                currency: Currency.USD,
            },
        },
    }),
];

export const dark = Template.bind({});
dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: "admin",
                lastname: "admin",
                age: 22,
                avatar: AvatarImg,
                country: Country.Armenia,
                city: "Yerevan",
                currency: Currency.USD,
            },
        },
    }),
];
