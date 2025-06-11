import { ReactNode } from "react";
import { ColorValue, StyleProp, StyleSheet, TextStyle } from "react-native";

export type TextProps = {
    readonly variant?: keyof typeof TEXT_VARIANTS;
    readonly muted?: boolean;
    readonly weight?: keyof (typeof TEXT_VARIANTS[keyof typeof TEXT_VARIANTS]);
    readonly size?: keyof typeof TEXT_SIZES;
    readonly children: string | ReactNode;
    readonly color?: ColorValue;
    readonly style?: StyleProp<TextStyle>;
    readonly center?: boolean;
};
export const TEXT_VARIANTS = {
    default: StyleSheet.create({
        regular: {
            fontFamily: "Poppins-Regular",
        },
        medium: {
            fontFamily: "Poppins-Medium",
        },
        semiBold: {
            fontFamily: "Poppins-SemiBold",
            fontWeight: 600,
        },
        bold: {
            fontFamily: "Poppins-Bold",
            fontWeight: 'bold',
        },
    }),
    mono: StyleSheet.create({
        medium: {
            fontFamily: "Monospace",
        },
        regular: {
            fontFamily: "Monospace",
        },
        semiBold: {
            fontFamily: "Monospace-Bold",
            fontWeight: 600,
        },
        bold: {
            fontFamily: "Monospace-Bold",
            fontWeight: 'bold',
        },
    }),
};
export const TEXT_SIZES = StyleSheet.create({
    xl: {
        fontSize: 32,
        lineHeight: 38,
    },
    lg: {
        fontSize: 20,
        lineHeight: 28,
    },
    md: {
        fontSize: 16,
        lineHeight: 24,
    },
    sm: {
        fontSize: 14,
        lineHeight: 20,
    },
    xs: {
        fontSize: 12,
        lineHeight: 16,
    }
});