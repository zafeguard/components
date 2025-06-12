import { RegistryItemHelper } from "@libs/ur-helper/registry";

type Payload = {
    readonly sessionId: string;
    readonly publicKey: string;
    readonly commitment: string;
    readonly shares: string[];
};
const CDDL = `
secure-share = #6.112({
    sessionId: text,
    publicKey: text,
    commitment: text,
    shares: [+ #6.112(text)]
})
`
export const SecureShareRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    sessionId: 1,
    publicKey: 2,
    commitment: 3,
    shares: 4,
}, "secure-share", CDDL);
export const createSecureShare = (payload: Payload) => new SecureShareRegistry(payload);
export type SecureShareRegistryItem = ReturnType<typeof createSecureShare>;