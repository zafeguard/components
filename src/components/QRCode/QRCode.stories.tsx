import type { Meta, StoryObj } from "@storybook/react";
import QRCode from "./QRCode";
import {
    createKeyExport,
    createKeyIdentity,
    createSecureShare,
    createSession,
    createBatchSignature,
    createBatchSignRequest,
    createPartialSignature
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
                    <Text variant="mono" size="xs">{JSON.stringify(context.args.registry.data, undefined, 4)}</Text>
                </View>
            </View>
        ),
    ],
} satisfies Meta<typeof QRCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const KeyIdentity: Story = {
    args: {
        registry: createKeyIdentity({
            fingerprint: "0000000000000000000000000000000",
            publicKey: "age1testtesttesttesttesttesttest",
        }),
    },
};
export const SecureShare: Story = {
    args: {
        registry: createSecureShare({
            sessionId: "00000000000000000000000000000000",
            publicKey: "age1testtesttesttesttesttesttest",
            commitment: "00000000000000000000000000000000",
            shares: ["00000000000000000000000000000000", "00000000000000000000000000000000"],
        }),
    },
};
export const Session: Story = {
    args: {
        registry: createSession({
            curve: "SECP256K1",
            type: "ECDSA",
            nonce: "00000000000000000000000000000000",
            threshold: 1,
            maxDevices: 2,
        }),
    },
};
export const KeyExport: Story = {
    args: {
        registry: createKeyExport({
            keyShare: "00000000000000000000000000000000",
            publicKeys: ["age1testtesttesttesttesttesttest", "age1testtesttesttesttesttesttest"],
            keyPair: {
                privateKey: "AGE-IDENTITY-0000000000000000000000000000000000",
                publicKey: "age1testtesttesttesttesttesttest",
            },
        }),
    },
};
export const SignRequest: Story = {
    args: {
        registry: createBatchSignRequest({
            nonce: "0000000000000000000000000000000",
            messageHashes: [
                "00000000000000000000000000000000000000000000000000000000000000",
                "00000000000000000000000000000000000000000000000000000000000000",
            ],
            keyId: "0000000000000000000000000000000",
            derivationPath: [44, 60, 0, 0, 0],
        }),
    },
};
export const Signature: Story = {
    args: {
        registry: createBatchSignature([
            {
                signature: "00000000000000000000000000000000000000000000000000000000000000",
                recoveryId: 1,
                messageHash: "00000000000000000000000000000000000000000000000000000000000000"
            },
            {
                signature: "00000000000000000000000000000000000000000000000000000000000000",
                recoveryId: 1,
                messageHash: "00000000000000000000000000000000000000000000000000000000000000"
            },
            {
                signature: "00000000000000000000000000000000000000000000000000000000000000",
                recoveryId: 1,
                messageHash: "00000000000000000000000000000000000000000000000000000000000000"
            }
        ]),
    },
};
export const PartialSignature: Story = {
    args: {
        registry: createPartialSignature({
            values: [
                "00000000000000000000000000000000000000000000000000000000000000",
                "00000000000000000000000000000000000000000000000000000000000000",
                "00000000000000000000000000000000000000000000000000000000000000",
            ],
            publicKey: "age1testtesttesttesttesttesttest"
        })
    },
};

