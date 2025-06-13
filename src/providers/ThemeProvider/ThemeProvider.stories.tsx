import type { Meta, StoryObj } from "@storybook/react";
import ThemeProvider from "./ThemeProvider";
import { View } from "@components/View";
import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { EColorScheme } from "@constants/scheme";
import { useTheme } from "@contexts/Theme";

function Render() {
    const { theme, setTheme } = useTheme();
    return (
        <View gap={2}>
            <View gap={2}>
                <Text>Theme: {theme}</Text>
                <Text>Hello World!</Text>
            </View>
            <Button text="Dark" onPress={() => setTheme(EColorScheme.DARK)} />
            <Button text="Light" onPress={() => setTheme(EColorScheme.LIGHT)} />
        </View>
    )
}
const meta = {
    title: "ThemeProvider",
    component: ThemeProvider,
    args: {},
    render: (args) => {
        return (
            <ThemeProvider theme={args.theme}>
                <Render />
            </ThemeProvider>
        )
    },
} satisfies Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Auto: Story = {
    args: {
        theme: EColorScheme.AUTO,
    },
};
export const Dark: Story = {
    args: {
        theme: EColorScheme.DARK,
    },
};
export const Light: Story = {
    args: {
        theme: EColorScheme.LIGHT,
    },
};