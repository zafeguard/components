import { RegistryItemHelper } from "@libs/ur-helper/registry";

type Payload = {
    readonly sessionId: string;
    readonly fingerprint: string;
    readonly publicKey: string;
    readonly name: string;
};
export const SessionIdentityRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    sessionId: 1,
    fingerprint: 2,
    publicKey: 3,
    name: 4,
}, "session-identity");
export const createSessionIdentity = (payload: Payload) => new SessionIdentityRegistry(payload);
export type SessionIdentityRegistryItem = ReturnType<typeof createSessionIdentity>;