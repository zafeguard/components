import { ReactNode } from "react";
import { ColorValue, StyleProp, ViewStyle } from "react-native";

export type ViewProps = {
    readonly fluid?: boolean;
    readonly style?: StyleProp<ViewStyle>;
    readonly direction?: "column" | "row";
    readonly justify?: "space-between" | "space-around" | "space-evenly" | "flex-start" | "flex-end" | "center";
    readonly align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    readonly flex?: number;
    readonly gap?: number;
    readonly transparent?: boolean;
    readonly children?: ReactNode | Array<ReactNode>;
    readonly backgroundColor?: ColorValue;
};