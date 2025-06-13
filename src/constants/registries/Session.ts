import { RegistryItemHelper } from "@libs/ur";
import { UrRegistry } from "@ngraveio/bc-ur";

type Payload = {
    readonly curve: string;
    readonly type: string;
    readonly nonce: string;
    readonly threshold: number;
    readonly maxDevices: number;
};
export const SessionRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    curve: 1,
    type: 2,
    nonce: 3,
    threshold: 4,
    maxDevices: 5,
}, "session");
export const createSession = (payload: Payload) => new SessionRegistry(payload);
export type SessionRegistryItem = ReturnType<typeof createSession>;
UrRegistry.addItem(SessionRegistry);