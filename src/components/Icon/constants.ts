import { TEXT_SIZES } from "@components/Text";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ComponentProps } from "react";
import { ColorValue } from "react-native";

export type FontAwesomeIconName = ComponentProps<typeof FontAwesome>["name"];
export type IconProps = {
    readonly name: FontAwesomeIconName;
    readonly size?: keyof typeof TEXT_SIZES | number;
    readonly color?: ColorValue;
    readonly withCard?: boolean;
    readonly padding?: number;
};