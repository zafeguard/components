import { memo, useCallback, useEffect, useState } from "react";
import { QRScannerProps } from "./constants";
import { BarcodeScanningResult, CameraView, PermissionStatus, useCameraPermissions } from "expo-camera";
import { StyleSheet } from "react-native";
import { BORDER_RADIUS } from "@constants/variants";
import { View } from "@components/View";
import useReady from "@hooks/useReady";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { Text } from "@components/Text";
import { UrFountainDecoder, UrRegistry } from "@ngraveio/bc-ur";
import { ProgressBar } from "@components/ProgressBar";
import { useThemeColor } from "@hooks/useThemeColor";

function BaseQRScanner(props: QRScannerProps) {
    const {
        allowedRegistries,
        size,
        onDetected
    } = props;
    const { muted: mutedBgColor } = useThemeColor("text");
    const { isReady } = useReady();
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraActive, setCameraActive] = useState<boolean>(() => false);
    const [progress, setProgress] = useState<number>(0);
    const [decoder] = useState<UrFountainDecoder>(new UrFountainDecoder());

    const reset = useCallback(() => {
        decoder.reset();
        setProgress(0);
    }, [decoder]);
    useEffect(() => {
        if (permission?.status !== PermissionStatus.GRANTED) return;
        if (!isReady) return setCameraActive(false);
        setCameraActive(true);
        reset();

        return () => {
            setCameraActive(false);
            reset();
        }
    }, [isReady, permission]);
    const handleDetected = useCallback((result: BarcodeScanningResult) => {
        if (typeof onDetected !== "function") return;
        try {
            if (!result.data) return;
            const isDone = decoder.receivePartUr(result.data);
            if (!isDone) return decoder.reset();
            setProgress(decoder.getProgress());

            if (!decoder.isComplete()) return;

            const resultUR = decoder.resultUr;
            for (const Registry of allowedRegistries) {
                if (decoder.expectedType !== Registry.URType) continue;
                const registry = Registry.fromCBORData(resultUR.getPayloadCbor());
                if (!registry) continue;
                onDetected(decoder.getDecodedData());
                break;
            }
            return reset();
        } catch (e) {
            console.error(e);
            reset();
        }
    }, [decoder, onDetected]);
    useEffect(() => {
        if (allowedRegistries.length <= 0) return;
        UrRegistry.addItems(allowedRegistries);
        return () => {
            UrRegistry.clearRegistry();
        }
    }, [allowedRegistries]);

    if (!permission || !permission.granted) return (
        <View style={styles.grantPermissionContainer} justify="center">
            <Icon name="exclamation-triangle" color={"orange"} size={64} />
            <View justify="center" gap={0}>
                <Text size="lg" weight="bold" center>Permission Required</Text>
                <Text center>We need your permission to show the camera</Text>
            </View>
            <Button
                leftComponent={({ color }) => <Icon name="gear" color={color} />}
                onPress={requestPermission}
                text="Grant permission"
            />
        </View>
    );
    return (
        <View
            style={[
                styles.container,
                {
                    width: size,
                    height: size,
                }
            ]}
            gap={0}
        >
            {isReady && (
                <CameraView
                    style={styles.cameraCanvas}
                    facing={"back"}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr"]
                    }}
                    onBarcodeScanned={(result) => handleDetected(result)}
                    active={cameraActive && isReady}
                />
            )}
            <ProgressBar
                currentValue={progress * 100}
                maxValue={100}
                backgroundColor={mutedBgColor ?? undefined}
                style={{marginTop: -4}}
            />
        </View>
    )
}
const QRScanner = memo(BaseQRScanner);
QRScanner.displayName = "QRScanner";
export default QRScanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: BORDER_RADIUS,
        overflow: "hidden",
    },
    cameraCanvas: {
        flex: 1,
        borderRadius: BORDER_RADIUS,
        overflow: "hidden",
        minHeight: 200,
        width: "100%",
    },
    grantPermissionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },
})