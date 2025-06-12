import { RegistryItemHelper } from "@libs/ur-helper/registry";

type Payload = {
    readonly sessionId: string;
    readonly fingerprint: string;
    readonly publicKey: string;
};
export const KeyIdentityRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    sessionId: 1,
    fingerprint: 2,
    publicKey: 3,
}, "identity");
export const createKeyIdentity = (payload: Payload) => new KeyIdentityRegistry(payload);
export type KeyIdentityRegistryItem = ReturnType<typeof createKeyIdentity>;