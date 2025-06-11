import { memo, useMemo } from "react";
import { ProgressBarProps } from "./constants";
import { View } from "@components/View";
import { StyleSheet } from "react-native";
import { BORDER_RADIUS } from "@constants/variants";

function BaseProgressBar(props: ProgressBarProps) {
    const {
        currentValue,
        maxValue,
        progressColor = "green",
        backgroundColor = "black",
        style,
    } = props;
    const currentProgress = useMemo(() => (currentValue / maxValue) * 100, [currentValue, maxValue]);

    return (
        <View direction="row" style={[styles.container, style]} gap={0}>
            <View
                style={[
                    styles.progress,
                    {
                        width: `${Math.min(100, currentProgress)}%`,
                        backgroundColor: progressColor,
                    },
                ]}
            />
            <View
                style={[
                    styles.background,
                    {
                        width: `${Math.max(0, 100 - currentProgress)}%`,
                        backgroundColor: backgroundColor,
                    }
                ]}
            />
        </View>
    );
}
const ProgressBar = memo(BaseProgressBar);
ProgressBar.displayName = "ProgressBar";
export default ProgressBar;

const styles = StyleSheet.create({
    container: {
        minHeight: 5,
        width: "100%",
        overflow: "hidden",
        borderRadius: BORDER_RADIUS,
    },
    progress: {
        height: "100%",
        minHeight: 5,
    },
    background: {
        height: "100%",
        minHeight: 5,
    },
});