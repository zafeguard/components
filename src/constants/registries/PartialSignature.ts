import { RegistryItemHelper } from "@libs/ur-helper/registry";

type Payload = {
    readonly values: string[];
    readonly publicKey: string;
};
export const PartialSignatureRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    values: 1,
    publicKey: 2,
}, "partial-signature");
export const createPartialSignature = (payload: Payload) => new PartialSignatureRegistry(payload);
export type PartialSignatureRegistryItem = ReturnType<typeof createPartialSignature>;