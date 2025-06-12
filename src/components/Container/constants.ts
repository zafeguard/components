import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ContainerProps = PropsWithChildren<{
    readonly style?: StyleProp<ViewStyle>;
}>;