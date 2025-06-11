import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import { VARIANTS } from "../../constants/variants";
import { View } from "../View";

const meta = {
    title: "Text",
    component: Text,
    args: {
        children: "Hello World!"
    },
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
    args: {
        children: "Hello World!",
        variant: "default",
    },
};
export const MonoVariant: Story = {
    args: {
        children: "Hello World!",
        variant: "mono",
    },
};
export const MutedDefault: Story = {
    args: {
        children: "Hello World!",
        variant: "default",
        muted: true,
    }
};
export const MutedMono: Story = {
    args: {
        children: "Hello World!",
        variant: "mono",
        muted: true,
    }
};
export const LargeDefault: Story = {
    args: {
        children: "Hello World!",
        variant: "default",
        size: "lg",
    }
};
export const HugeDefault: Story = {
    args: {
        children: "Hello World!",
        variant: "default",
        size: "xl",
    }
};
export const CustomColor: Story = {
    args: {
        children: "Hello World!",
        variant: "default",
        color: VARIANTS.primary.background,
    }
};