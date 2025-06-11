import { ColorValue, StyleProp, ViewStyle } from "react-native";

export type ProgressBarProps = {
    readonly currentValue: number;
    readonly maxValue: number;
    readonly progressColor?: ColorValue;
    readonly backgroundColor?: ColorValue;
    readonly style?: StyleProp<ViewStyle>;
};