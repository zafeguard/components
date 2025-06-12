import type { Meta, StoryObj } from "@storybook/react";
import RegistryQRScanner from "./RegistryQRScanner";
import {
    BatchSignatureRegistry,
    BatchSignRequestRegistry,
    KeyExportRegistry,
    KeyRecoverRegistry,
    SessionIdentityRegistry,
    PartialSignatureRegistry,
    SecureShareRegistry,
    SessionRegistry
} from "@constants/registries";
import { View } from "@components/View";

const meta = {
    title: "RegistryQRScanner",
    component: RegistryQRScanner,
    args: {},
    decorators: [
        (Story) => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof RegistryQRScanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        allowedItems: [
            BatchSignatureRegistry,
            BatchSignRequestRegistry,
            KeyExportRegistry,
            KeyRecoverRegistry,
            SessionIdentityRegistry,
            PartialSignatureRegistry,
            SecureShareRegistry,
            SessionRegistry,
        ],
        onDetected: (result) => console.log(result),
        size: 256,
    },
};