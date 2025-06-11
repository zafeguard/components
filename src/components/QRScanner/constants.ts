import { RegistryItem, RegistryItemBase, RegistryItemClass } from "@ngraveio/bc-ur";

type OnDetectedParameters<T extends object = object> = {
    readonly type: string;
    readonly data: T;
};
export type QRScannerProps = {
    readonly allowedRegistries: Array<RegistryItemClass<RegistryItemBase>>;
    readonly size?: number;
    readonly onDetected?: (result: RegistryItem) => void;
};