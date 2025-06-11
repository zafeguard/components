import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { View } from "react-native";

const meta = {
    title: "Input",
    component: Input,
    args: {},
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        placeholder: "Type something here",
    },
};
export const Icon: Story = {
    args: {
        icon: "search",
        placeholder: "Search something"
    },
};
export const Ghost: Story = {
    args: {
        placeholder: "Ghost Input",
        variant: "ghost"
    },
};
