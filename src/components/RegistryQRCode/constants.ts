import { QRCodeProps } from "@components/QRCode";
import { RegistryItemBase, UrFountainEncoder } from "@ngraveio/bc-ur";

type BaseRegistryProps = {
    readonly registry: RegistryItemBase;
    readonly maxFragmentLength?: number;
    readonly minFragmentLength?: number;
};
export type RegistryQRCodeProps = BaseRegistryProps & Omit<QRCodeProps, "values">;

export const DEFAULT_MAX_FRAGMENT_LENGTH = 15;
export const DEFAULT_MIN_FRAGMENT_LENGTH = 10;
export const getRegistryQR = (
    options: BaseRegistryProps,
) => {
    const {
        registry,
        minFragmentLength = DEFAULT_MIN_FRAGMENT_LENGTH,
        maxFragmentLength = DEFAULT_MAX_FRAGMENT_LENGTH,
    } = options;
    const encoder = new UrFountainEncoder(registry, maxFragmentLength, minFragmentLength);
    const fragments = encoder.getAllPartsUr();
    return fragments.map(fragment => fragment.toString());
};