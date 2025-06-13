import { createRegistry, GenericRegistryItemBase, RegistryItemHelper } from "@libs/ur";
import { UrRegistry } from "@ngraveio/bc-ur";

type ValuePayload = {
    readonly messageHash: string;
    readonly partialSignature: string;
};
type Payload = {
    readonly values: Array<GenericRegistryItemBase<ValuePayload>>;
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
export const createPartialSignature = (payload: Payload) => createRegistry(PartialSignatureRegistry, payload);
export type PartialSignatureRegistryItem = ReturnType<typeof createPartialSignature>;
UrRegistry.addItem(PartialSignatureItemRegistry);
UrRegistry.addItem(PartialSignatureRegistry);