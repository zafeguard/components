import { BORDER_RADIUS, VARIANTS } from '@constants/variants';
import { useThemeColor } from '@hooks/useThemeColor';
import * as Haptics from 'expo-haptics';
import { memo, useCallback } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { BUTTON_SIZES, ButtonProps, ButtonSubComponent } from './contants';

function BaseButton(props: ButtonProps) {
    const {
        text,
        leftComponent,
        rightComponent,
        variant = "primary",
        size = "md",
        onPress,
        hapticTouch,
        disabled,
        style,
        fluid,
    } = props;
    const isOutlineStyle = variant === 'outline';
    const variantProps = VARIANTS[variant];
    const textColor = useThemeColor("text");

    const handlePress = useCallback(() => {
        if (disabled) return;
        if (hapticTouch && Platform.OS === 'ios')
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        if (typeof onPress !== "function") return;
        return onPress();
    }, [onPress, hapticTouch, disabled]);

    const createComponent = useCallback((component?: ButtonSubComponent) => {
        if (!component) return <View style={{ width: 12 }} />;
        if (typeof component === "function")
            return component({
                color: variantProps.text ?? textColor.default,
                size: BUTTON_SIZES[size ?? "md"].fontSize + 4
            });
        return component;
    }, []);

    return (
        <TouchableOpacity
            style={[
                {
                    width: fluid ? "100%" : "auto",
                    backgroundColor: isOutlineStyle ? 'transparent' : variantProps.background,
                    borderColor: variantProps.border,
                    borderWidth: 2,
                },
                disabled ? styles.disabled : undefined,
                styles.base,
                BUTTON_SIZES[size],
                style,
            ]}
            onPress={handlePress}
            disabled={disabled}
            activeOpacity={disabled ? 1 : 0.75}
        >
            <View style={styles.container}>
                {[
                    createComponent(leftComponent),
                    text && (
                        <Text
                            style={[
                                {
                                    width: "auto",
                                    textAlign: "center",
                                    fontSize: BUTTON_SIZES[size ?? "md"].fontSize,
                                    color: variantProps.text ?? textColor.default,
                                },
                            ]}
                        >
                            {text}
                        </Text>
                    ),
                    createComponent(rightComponent),
                ]}
            </View>
        </TouchableOpacity>
    );
}

const Button = memo(BaseButton);
Button.displayName = 'Button';
export default Button;
const styles = StyleSheet.create({
    base: {
        height: "auto",
        borderRadius: BORDER_RADIUS,
    },
    disabled: {
        opacity: 0.5,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
    }
})
