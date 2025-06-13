import { VARIANTS } from "@constants/variants";
import { JSX } from "react";
import { ColorValue, StyleProp, StyleSheet, ViewStyle } from "react-native";

export type ButtonSubComponentProps = {
    readonly color: ColorValue;
    readonly size: number;
};
export type ButtonSubComponent = JSX.Element | ((props: ButtonSubComponentProps) => JSX.Element);
export type ButtonProps = {
    readonly text?: string;
    readonly leftComponent?: ButtonSubComponent;
    readonly rightComponent?: ButtonSubComponent;
    readonly fluid?: boolean;
    readonly variant?: keyof typeof VARIANTS;
    readonly size?: keyof typeof BUTTON_SIZES;
    readonly onPress?: () => void;
    readonly hapticTouch?: boolean;
    readonly disabled?: boolean;
    readonly style?: StyleProp<ViewStyle>;
    readonly compact?: boolean;
};

export const BUTTON_SIZES = StyleSheet.create({
    xs: {
        fontSize: 10,
        paddingVertical: 4,
        paddingHorizontal: 4,
    },
    sm: {
        fontSize: 12,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    md: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    lg: {
        fontSize: 20,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    xl: {
        fontSize: 24,
        paddingVertical: 18,
        paddingHorizontal: 18,
    },
});