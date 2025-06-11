import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import { View } from "react-native";

const meta = {
    title: "Icon",
    component: Icon,
    args: {},
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithCard: Story = {
    args: {
        name: "check-circle",
        size: 64,
        withCard: true,
        padding: 16,
    },
};
export const CircleCheck: Story = {
    args: {
        name: "check-circle",
        size: 64
    },
};
export const User: Story = {
    args: {
        name: "user",
        size: 64
    },
};
export const ExclamationCircle: Story = {
    args: {
        name: "exclamation-circle",
        size: 64
    },
};
export const ShoppingBag: Story = {
    args: {
        name: "shopping-bag",
        size: 64
    },
};
export const Apple: Story = {
    args: {
        name: "apple",
        size: 64
    },
};
export const Facebook: Story = {
    args: {
        name: "facebook",
        size: 64
    },
};
