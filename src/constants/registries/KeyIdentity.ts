import { RegistryItemHelper } from "@libs/ur-helper/registry";

type Payload = {
    readonly fingerprint: string;
    readonly publicKey: string;
};
export const KeyIdentityRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    fingerprint: 1,
    publicKey: 2,
}, "identity");
export const createKeyIdentity = (payload: Payload) => new KeyIdentityRegistry(payload);