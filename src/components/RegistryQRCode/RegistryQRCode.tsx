import { memo, useMemo } from "react";
import { RegistryQRCodeProps } from "./constants";
import { UrFountainEncoder } from "@ngraveio/bc-ur";
import { QRCode } from "@components/QRCode";

function BaseRegistryQRCode(props: RegistryQRCodeProps) {
    const {
        registry,
        minFragmentLength = 10,
        maxFragmentLength = 15,
        ...rest
    } = props;

    const payloads = useMemo(() => {
        const encoder = new UrFountainEncoder(registry, maxFragmentLength, minFragmentLength);
        const fragments = encoder.getAllPartsUr();
        return fragments.map(fragment => fragment.toString());
    }, [registry]);

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