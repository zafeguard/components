import { createRegistry, GenericRegistryItemBase, RegistryItemHelper } from "@libs/ur";
import { UrRegistry } from "@ngraveio/bc-ur";

type KeyPairPayload = {
    readonly privateKey: string;
    readonly publicKey: string;
    readonly fingerprint?: string;
};
type Payload = {
    readonly curve: string;
    readonly keyShare: string;
    readonly publicKeys: string[];
    readonly keyPair: GenericRegistryItemBase<KeyPairPayload>;
};
export const KeyPairExportRegistry = RegistryItemHelper.createKeyMap<Record<keyof KeyPairPayload, number>, KeyPairPayload>({
    privateKey: 1,
    publicKey: 2,
    fingerprint: 3,
}, "keypair");
export const KeyExportRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>, Payload>({
    curve: 1,
    keyShare: 2,
    publicKeys: 3,
    keyPair: 4,
}, "key-export");
export const createKeyExport = (payload: Payload) => createRegistry(KeyExportRegistry, payload);
export type KeyExportRegistryItem = ReturnType<typeof createKeyExport>;
UrRegistry.addItem(KeyPairExportRegistry);
UrRegistry.addItem(KeyExportRegistry);