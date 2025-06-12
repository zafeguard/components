import { memo, useEffect } from "react";
import { QRCodeProps } from "./constants";
import { useAnimatedIndex } from "./hooks/useAnimatedIndex";
import RNQRCode from 'react-native-qrcode-svg';
import { View } from "@components/View";

function BaseQRCode(props: QRCodeProps) {
    const {
        values,
        interval = 500,
        size = 256,
    } = props;
    const { initialize, currentIndex } = useAnimatedIndex(interval);

    useEffect(() => {
        if (!values || values.length <= 0) return;
        return initialize(values);
    }, [values, initialize]);

    return (
        <View justify="center" align="center" style={{padding: 8, backgroundColor: "white", width: size + 8, height: size + 8}}>
            <RNQRCode size={size} value={values[currentIndex]} />
        </View>
    );
}
const QRCode = memo(BaseQRCode);
QRCode.displayName = "QRCode";
export default QRCode;