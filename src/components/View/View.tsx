import { memo } from "react";
import { View as RNView } from "react-native";
import { ViewProps } from "./constants";
import { useThemeColor } from "@hooks/useThemeColor";

function BaseView(props: ViewProps) {
    const {
        style,
        children,
        direction,
        justify,
        align,
        flex,
        gap = 0,
        transparent,
        fluid,
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
                    width: fluid ? "100%" : undefined,
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