import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";
import { View } from "@components/View";
import { PortalProvider } from "@gorhom/portal";

const meta = {
    title: "Loader",
    component: Loader,
    args: {},
    decorators: [
        (Story) => (
            <PortalProvider>
                <View style={{ padding: 16 }}>
                    <Story />
                </View>
            </PortalProvider>
        ),
    ],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    args: {
        text: "Loading",
        direction: "row",
    },
};
export const Vertical: Story = {
    args: {
        text: "Loading",
        direction: "column",
    },
};
export const AnimatedDot: Story = {
    args: {
        text: "Loading",
        direction: "column",
        animate: true,
    },
};
export const Overlay: Story = {
    args: {
        text: "Loading",
        direction: "column",
        animate: true,
        overlay: true,
    },
};