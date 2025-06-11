import { memo } from "react";
import { View as RNView } from "react-native";
import { ViewProps } from "./constants";
import { useThemeColor } from "@hooks/useThemeColor";

function BaseView(props: ViewProps) {
    const {
        style,
        children,
        direction = "column",
        justify = "flex-start",
        align = "center",
        flex,
        gap = 8,
        transparent,
        backgroundColor: overriddenBackgroundColor,
    } = props;
    const { default: backgroundColor } = useThemeColor("background");
    return (
        <RNView
            style={[
                {
                    backgroundColor: transparent ? "transparent" : (overriddenBackgroundColor ?? backgroundColor),
                    flexDirection: direction,
                    justifyContent: justify,
                    alignItems: align,
                    flex,
                    gap,
                    width: "100%",
                },
                style,
            ]}
        >
            {children}
        </RNView>
    );
}
const View = memo(BaseView);
View.displayName = "View";
export default View;