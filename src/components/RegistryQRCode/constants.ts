import { QRCodeProps } from "@components/QRCode";
import { RegistryItemBase } from "@ngraveio/bc-ur";

export type RegistryQRCodeProps = {
    readonly registry: RegistryItemBase;
    readonly maxFragmentLength?: number;
    readonly minFragmentLength?: number;
} & Omit<QRCodeProps, "values">;