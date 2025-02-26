import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => {
    return <ProfileCard {...(args as object)} />;
};

export const primary = Template.bind({});
primary.args = {
    data: {
        first: "admin",
        lastname: "admin",
        age: 22,
        avatar,
        country: Country.Armenia,
        city: "Yerevan",
        currency: Currency.USD,
    },
};

export const error = Template.bind({});
error.args = {
    error: "true",
};

export const loading = Template.bind({});
loading.args = {
    isLoading: true,
};
