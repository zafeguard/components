import { RegistryItemBase } from "@ngraveio/bc-ur";

export type RegistryQRCodeProps = {
    readonly registry: RegistryItemBase;
    readonly interval?: number;
    readonly maxFragmentLength?: number;
    readonly minFragmentLength?: number;
    readonly size?: number;
};