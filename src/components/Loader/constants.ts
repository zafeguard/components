import { ViewProps } from "../View";
import { ColorValue } from "react-native";

export type LoaderProps = {
    readonly text?: string;
    readonly color?: ColorValue;
    readonly maxDots?: number;
    readonly animate?: boolean;
    readonly overlay?: boolean;
    readonly size?: number;
    readonly backdrop?: {
        readonly opacity?: number;
        readonly backgroundColor?: string;
    },
} & Omit<ViewProps, "transparent" | "backgroundColor">;