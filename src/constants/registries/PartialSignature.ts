import { RegistryItemHelper } from "@libs/ur-helper/registry";

type ValuePayload = {
    readonly messageHash: string;
    readonly partialSignature: string;
};
type Payload = {
    readonly values: ValuePayload[];
    readonly publicKey: string;
};

export const PartialSignatureItemRegistry = RegistryItemHelper.createKeyMap<Record<keyof ValuePayload, number>, ValuePayload>({
    messageHash: 1,
    partialSignature: 2,
}, "partial-signature-item");

export const PartialSignatureRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    values: 1,
    publicKey: 2,
}, "partial-signature");
export const createPartialSignature = (payload: Payload) => new PartialSignatureRegistry(Object.assign(payload, {
    values: payload.values.map(value => new PartialSignatureItemRegistry(value))
}));
export type PartialSignatureRegistryItem = ReturnType<typeof createPartialSignature>;