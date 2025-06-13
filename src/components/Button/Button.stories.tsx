import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Text, View } from "react-native";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onPress: fn(),
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    onPress: fn(),
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const Dark: Story = {
  args: {
    variant: "dark",
  },
};
export const SideComponent: Story = {
  args: {
    leftComponent: () => <Text>Left Component</Text>,
    rightComponent: () => <Text>Right Component</Text>,
  }
}
export const Small: Story = {
  args: {
    onPress: fn(),
    size: "sm",
    variant: "dark"
  },
};
export const Mini: Story = {
  args: {
    onPress: fn(),
    size: "xs",
    variant: "dark"
  },
};