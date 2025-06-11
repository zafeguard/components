import type { Meta, StoryObj } from "@storybook/react";
import QRScanner from "./QRScanner";
import {
    BatchSignatureRegistry,
    BatchSignRequestRegistry,
    KeyExportRegistry,
    KeyIdentityRegistry,
    PartialSignatureRegistry,
    SecureShareRegistry,
    SessionRegistry
} from "@constants/registries";
import { View } from "@components/View";

const meta = {
    title: "QRScanner",
    component: QRScanner,
    args: {},
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof QRScanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        allowedRegistries: [
            BatchSignatureRegistry,
            BatchSignRequestRegistry,
            KeyExportRegistry,
            KeyIdentityRegistry,
            PartialSignatureRegistry,
            SecureShareRegistry,
            SessionRegistry,
        ],
        onDetected: (result) => console.log(result),
        size: 256,
    },
};