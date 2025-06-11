import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { View } from "@components/View";
import { Text } from "@components/Text";
import { BORDER_RADIUS } from "@constants/variants";
import { Icon } from "@components/Icon";

const meta = {
    title: "Select",
    component: Select,
    args: {},
    decorators: [
        (Story) => (
            <View>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        data: [
            {
                label: "Dog",
                value: "dog",
            },
            {
                label: "Cat",
                value: "cat",
            },
            {
                label: "Bird",
                value: "bird",
            },
        ],
    },
};
export const Disabled: Story = {
    args: {
        data: [
            {
                label: "Dog",
                value: "dog",
            },
            {
                label: "Cat",
                value: "cat",
            },
            {
                label: "Bird",
                value: "bird",
            },
        ],
        disabled: true,
    },
};
export const Custom: Story = {
    args: {
        data: [
            {
                label: "Dog",
                value: "dog",
            },
            {
                label: "Cat",
                value: "cat",
            },
            {
                label: "Bird",
                value: "bird",
            },
        ],
        itemComponent: ({ label, value, selectedValue }) => (
            <View
                backgroundColor={"red"}
                style={{
                    borderRadius: BORDER_RADIUS,
                    paddingHorizontal: 12,
                    paddingVertical: 8
                }}
                gap={8}
                direction="row"
            >
                {selectedValue === value ? (
                    <Icon name="check-circle" size={22} color={"lime"} />
                ) : (
                    <Icon name="circle-o" size={22} color={"white"} />
                )}
                <Text style={{ width: "100%" }}>{label}</Text>
            </View>
        )
    },
};
