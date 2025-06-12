import { memo, useMemo } from "react";
import { DEFAULT_MAX_FRAGMENT_LENGTH, DEFAULT_MIN_FRAGMENT_LENGTH, getRegistryQR, RegistryQRCodeProps } from "./constants";
import { QRCode } from "@components/QRCode";

function BaseRegistryQRCode(props: RegistryQRCodeProps) {
    const {
        registry,
        minFragmentLength = DEFAULT_MIN_FRAGMENT_LENGTH,
        maxFragmentLength = DEFAULT_MAX_FRAGMENT_LENGTH,
        ...rest
    } = props;

    const payloads = useMemo(() => getRegistryQR({
        registry,
        minFragmentLength,
        maxFragmentLength,
    }), [registry, minFragmentLength, maxFragmentLength]);

    return (
        <QRCode
            values={payloads}
            {...rest}
        />
    );
}
const RegistryQRCode = memo(BaseRegistryQRCode);
RegistryQRCode.displayName = "RegistryQRCode";
export default RegistryQRCode;