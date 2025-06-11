import { View } from "@components/View";
import { BORDER_RADIUS } from "@constants/variants";
import { useThemeColor } from "@hooks/useThemeColor";
import { toRGB } from "@libs/color";
import { memo, PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

type Props = PropsWithChildren<{
    readonly enabled?: boolean;
    readonly size: number;
    readonly padding?: number;
}>;
function BaseWrapper(props: Props) {
    const {
        enabled,
        children,
        size,
        padding = 8,
    } = props;
    const { default: textColor } = useThemeColor("text");

    if (enabled) return (
        <View
            align="center"
            justify="center"
            backgroundColor={toRGB(textColor, 0.05)}
            style={[
                styles.card,
                {
                    width: size + padding,
                    height: size + padding,
                }
            ]}
        >
            {children}
        </View>
    );
    return children;
}
const Wrapper = memo(BaseWrapper);
Wrapper.displayName = "Wrapper";
export { Wrapper };

const styles = StyleSheet.create({
    card: {
        borderRadius: BORDER_RADIUS,
    }
})