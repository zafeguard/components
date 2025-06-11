import type { Meta, StoryObj } from "@storybook/react";
import { View as RNView } from "react-native";
import View from "./View";
import { Text } from "../Text";

const meta = {
    title: "View",
    component: View,
    args: {
        children: <Text>Hello World!</Text>,
    },
    decorators: [
        (Story) => (
            <RNView style={{ padding: 16 }}>
                <Story />
            </RNView>
        ),
    ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    args: {
        transparent: true,
        flex: 1,
        children: [
            <View flex={1}>
                <Text>Hello World!</Text>
            </View>,
            <View flex={1}>
                <Text>Hello World!</Text>
            </View>
        ],
        direction: "column",
        gap: 8,
    },
};
export const Horizontal: Story = {
    args: {
        transparent: true,
        flex: 1,
        children: [
            <View flex={1}>
                <Text>Hello World!</Text>
            </View>,
            <View flex={1}>
                <Text>Hello World!</Text>
            </View>
        ],
        direction: "row",
        gap: 8,
    },
};
