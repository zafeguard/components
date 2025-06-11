import { RegistryItemHelper } from "../../libs/ur-helper/registry";
import { UrRegistry } from "@ngraveio/bc-ur";

type ItemPayload = {
    readonly signature: string;
    readonly recoveryId?: number;
    readonly messageHash: string;
};
type CollectionPayload = {
    readonly items: ItemPayload[];
};
const Collection_CDDL = `
batch-signature = {
    items: [* signature-item]
}
`;
const Signature_CDDL = `
signature-item = {
    signature: text,
    recoveryId: int,
    messageHash: text,
}
`

export const SignatureItemRegistry = RegistryItemHelper.createKeyMap<Record<keyof ItemPayload, number>>({
    signature: 1,
    recoveryId: 2,
    messageHash: 3,
}, "signature-item", Signature_CDDL, 600);
export const BatchSignatureRegistry = RegistryItemHelper.createKeyMap<Record<keyof CollectionPayload, number>>({
    items: 1,
}, "batch-signature", Collection_CDDL, 601);
export const createBatchSignature = (payload: Array<ItemPayload>) => {
    UrRegistry.addItem(SignatureItemRegistry);
    UrRegistry.addItem(BatchSignatureRegistry);
    return new BatchSignatureRegistry({
        items: payload.map(item => new SignatureItemRegistry(item))
    });
}