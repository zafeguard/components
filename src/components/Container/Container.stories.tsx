import type { Meta, StoryObj } from "@storybook/react";
import { Text, View } from "react-native";
import Container from "./Container";

const meta = {
  title: "Container",
  component: Container,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <Text>Hello World!</Text>
    ),
  },
};
