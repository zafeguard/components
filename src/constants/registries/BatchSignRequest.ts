import { RegistryItemHelper } from "@libs/ur-helper/registry";

type Payload = {
    readonly nonce: string;
    readonly messageHashes: string[];
    readonly keyId: string;
    readonly derivationPath?: number[];
};
export const BatchSignRequestRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    nonce: 1,
    messageHashes: 2,
    keyId: 3,
    derivationPath: 4
}, "batch-sign-request");
export const createBatchSignRequest = (payload: Payload) => new BatchSignRequestRegistry(payload);
export type BatchSignRequestRegistryItem = ReturnType<typeof createBatchSignRequest>;