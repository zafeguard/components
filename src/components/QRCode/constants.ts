import { RegistryItemBase } from "@ngraveio/bc-ur";

export type QRCodeProps = {
    readonly registry: RegistryItemBase;
    readonly interval?: number;
    readonly maxFragmentLength?: number;
    readonly minFragmentLength?: number;
    readonly size?: number;
};