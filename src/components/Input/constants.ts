import { FontAwesomeIconName } from "@components/Icon";
import { StyleSheet, TextInputProps } from "react-native";

export type InputProps = {
    readonly icon?: FontAwesomeIconName;
    readonly bottomSheet?: boolean;
    readonly disabled?: boolean;
    readonly variant?: "default" | "ghost";
    readonly size?: keyof typeof INPUT_SIZES;
} & TextInputProps;

export const INPUT_SIZES = StyleSheet.create({
    md: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    sm: {
        fontSize: 14,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    xs: {
        fontSize: 12,
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
});