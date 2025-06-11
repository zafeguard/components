import { RegistryItemHelper } from "../../libs/ur-helper/registry";

type Payload = {
    readonly curve: string;
    readonly type: string;
    readonly nonce: string;
    readonly threshold: number;
    readonly maxDevices: number;
};
export const SessionRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>>({
    curve: 1,
    type: 2,
    nonce: 3,
    threshold: 4,
    maxDevices: 5,
}, "session");
export const createSession = (payload: Payload) => new SessionRegistry(payload);