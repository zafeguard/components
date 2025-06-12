import { memo, useCallback, useEffect, useState } from "react";
import { RegistryQRScannerProps } from "./constants";
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

function BaseRegistryQRScanner(props: RegistryQRScannerProps) {
    const {
        allowedItems,
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
            for (const Registry of allowedItems) {
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
        if (allowedItems.length <= 0) return;
        UrRegistry.addItems(allowedItems);
        return () => {
            UrRegistry.clearRegistry();
        }
    }, [allowedItems]);

    if (!permission || !permission.granted) return (
        <View style={styles.grantPermissionContainer} justify="center">
            <Icon name="exclamation-triangle" color={"orange"} size={64} />
            <View justify="center" gap={0}>
                <Text size="lg" weight="bold" center>Permission Required</Text>
                <Text center muted size="sm">We need your permission to show the camera</Text>
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
const RegistryQRScanner = memo(BaseRegistryQRScanner);
RegistryQRScanner.displayName = "RegistryQRScanner";
export default RegistryQRScanner;

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