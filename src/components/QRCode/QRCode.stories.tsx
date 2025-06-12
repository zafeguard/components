import type { Meta, StoryObj } from "@storybook/react";
import QRCode from "./QRCode";
import {
    createKeyExport,
    createSessionIdentity,
    createSecureShare,
    createSession,
    createBatchSignature,
    createBatchSignRequest,
    createPartialSignature,
    createKeyRecover
} from "@constants/registries";
import { Text } from "@components/Text";
import { View } from "@components/View";

const meta = {
    title: "QRCode",
    component: QRCode,
    args: {},
    decorators: [
        (Story, context) => (
            <View style={{ padding: 16 }} flex={1} justify="flex-start">
                <Story />
                <View align="flex-start">
                    <Text variant="default" weight="bold">Payload</Text>
                    <Text variant="mono" size="xs">{JSON.stringify(context.args.values, undefined, 4)}</Text>
                </View>
            </View>
        ),
    ],
} satisfies Meta<typeof QRCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        values: [
            "hello-1",
            "world-2"
        ],
    },
};
