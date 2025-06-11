import { RegistryItemHelper } from "@libs/ur-helper/registry";

type KeyPairPayload = {
    readonly privateKey: string;
    readonly publicKey: string;
};
type Payload = {
    readonly keyShare: string;
    readonly publicKeys: string[];
    readonly keyPair: KeyPairPayload;
};
export const KeyPairExportRegistry = RegistryItemHelper.createKeyMap<Record<keyof KeyPairPayload, number>>({
    privateKey: 1,
    publicKey: 2,
}, "keypair");
export const KeyExportRegistry = RegistryItemHelper.createKeyMap<Record<keyof Payload, number>>({
    keyShare: 1,
    publicKeys: 2,
    keyPair: 3,
}, "key-export");
export const createKeyExport = (payload: Payload) => new KeyExportRegistry(Object.assign(payload, {
    keyPair: new KeyPairExportRegistry(payload.keyPair),
}));