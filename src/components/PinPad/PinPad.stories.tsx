import type { Meta, StoryObj } from "@storybook/react";
import PinPad from "./PinPad";
import { View } from "@components/View";

const meta = {
    title: "PinPad",
    component: PinPad,
    args: {},
    decorators: [
        (Story) => (
            <View transparent style={{maxWidth: 400}}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof PinPad>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {},
};
