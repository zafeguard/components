import { RegistryItemHelper } from "@libs/ur-helper/registry";

type Payload = {
    readonly publicKey: string;
    readonly keyShare: string;
};
export const KeyRecoverRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    publicKey: 1,
    keyShare: 2,
}, "key-recover");
export const createKeyRecover = (payload: Payload) => new KeyRecoverRegistry(payload);
export type KeyRecoverRegistryItem = ReturnType<typeof createKeyRecover>;