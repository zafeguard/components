import type { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "./BottomSheet";
import { Button, View } from "react-native";
import { Text } from "../Text";
import { useRef } from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const meta = {
    title: "BottomSheet",
    component: BottomSheet,
    args: {},
    render: (args) => {
        const ref = useRef<BottomSheet>(null);
        return (
            <GestureHandlerRootView style={{ flex: 1, height: 400 }}>
                <View style={{ gap: 4 }}>
                    <Button title="Open" onPress={() => ref.current?.expand()} />
                    <Button title="Close" onPress={() => ref.current?.close()} />
                </View>
                <BottomSheet ref={ref} {...args} />
            </GestureHandlerRootView>
        )
    },
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        height: 300,
        bottomInset: 8,
        children: (
            <BottomSheetView style={{ paddingHorizontal: 12 }}>
                <Text>Hello world!</Text>
            </BottomSheetView>
        ),
    },
};