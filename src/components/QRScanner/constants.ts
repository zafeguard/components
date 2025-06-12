import { GenericRegistryItemBase } from "@libs/ur-helper";
import { RegistryItemBase, RegistryItemClass } from "@ngraveio/bc-ur";

export type QRScannerProps = {
    readonly allowedRegistries: Array<RegistryItemClass<RegistryItemBase>>;
    readonly size?: number;
    readonly onDetected?: (result: GenericRegistryItemBase<any>) => void;
};