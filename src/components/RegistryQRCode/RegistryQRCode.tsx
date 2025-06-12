import { memo, useEffect, useMemo } from "react";
import { RegistryQRCodeProps } from "./constants";
import { useAnimatedIndex } from "./hooks/useAnimatedIndex";
import { UrFountainEncoder } from "@ngraveio/bc-ur";
import RNQRCode from 'react-native-qrcode-svg';
import { View } from "@components/View";

function BaseRegistryQRCode(props: RegistryQRCodeProps) {
    const {
        registry,
        interval = 500,
        minFragmentLength = 10,
        maxFragmentLength = 15,
        size = 256,
    } = props;
    const { initialize, currentIndex } = useAnimatedIndex(interval);

    const payload = useMemo(() => {
        const encoder = new UrFountainEncoder(registry, maxFragmentLength, minFragmentLength);
        const fragments = encoder.getAllPartsUr();
        return fragments.map(fragment => fragment.toString());
    }, [registry]);
    useEffect(() => {
        if (!payload || payload.length <= 0) return;
        return initialize(payload);
    }, [payload, initialize]);

    return (
        <View style={{padding: 8, backgroundColor: "white", width: size + 8, height: size + 8}}>
            <RNQRCode size={size} value={payload[currentIndex]} />
        </View>
    );
}
const RegistryQRCode = memo(BaseRegistryQRCode);
RegistryQRCode.displayName = "RegistryQRCode";
export default RegistryQRCode;