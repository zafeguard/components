import { Text as RNText } from "react-native";
import { TEXT_SIZES, TEXT_VARIANTS, TextProps } from "./constants";
import { memo } from "react";
import { useThemeColor } from "@hooks/useThemeColor";

function TextComponent(props: TextProps) {
    const {
        children,
        variant = "default",
        weight = "regular",
        size = "md",
        muted,
        color,
        style,
        center,
        fluid,
    } = props;
    const { default: defaultColor } = useThemeColor("text");

    return (
        <RNText
            style={[
                TEXT_VARIANTS[variant][weight],
                TEXT_SIZES[size ?? "default"],
                {
                    opacity: muted ? 0.75 : 1,
                    color: color ?? defaultColor,
                    textAlign: center ? "center" : undefined,
                    width: fluid ? "100%" : "auto",
                },
                style,
            ]}
        >
            {children}
        </RNText>
    )
}
const Text = memo(TextComponent);
Text.displayName = "Text";
export default Text;