import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";

export default {
    title: "entities/CurrencySelect",
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => {
    return <CurrencySelect {...args} />;
};

export const primary = Template.bind({});
primary.args = {};
