import { memo, useMemo, useState } from "react";
import { INPUT_SIZES, InputProps } from "./constants";
import { Wrapper } from "./Wrapper";
import { Platform, StyleSheet, TextStyle, View } from "react-native";
import { BORDER_RADIUS } from "@constants/variants";
import { Icon } from "@components/Icon";
import { useThemeColor } from "@hooks/useThemeColor";

function BaseInput(props: InputProps) {
    const {
        bottomSheet,
        icon,
        style,
        disabled,
        variant,
        multiline,
        placeholder,
        onBlur,
        placeholderTextColor,
        numberOfLines,
        onChangeText,
        defaultValue,
        value,
        maxLength,
        size,
        textAlignVertical = "top",
        autoCorrect = false,
        ...inputProps
    } = props;
    const { default: textColor, muted: mutedTextColor } = useThemeColor("text");
    const { default: backgroundColor } = useThemeColor("background");
    const [inputHeight, setInputHeight] = useState<number>();
    const isGhost = useMemo(() => variant === "ghost", [variant]);

    return (
        <View
            style={[
                {
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                },
                {
                    width: "100%",
                    borderColor: mutedTextColor ?? undefined,
                    borderWidth: isGhost ? 0 : 2,
                    backgroundColor: isGhost ? undefined : backgroundColor,
                },
                styles.base,
            ]}
        >
            {icon && (
                <View style={{ marginLeft: 8, opacity: 0.75 }}>
                    <Icon name={icon} color={textColor} />
                </View>
            )}
            <Wrapper
                renderType={bottomSheet ? "bottom-sheet" : "react-native"}
                style={[
                    styles.base,
                    {
                        color: textColor,
                        flex: 1,
                        width: "100%",
                        margin: "auto",
                        borderTopLeftRadius: icon ? 0 : undefined,
                        borderBottomLeftRadius: icon ? 0 : undefined,
                        minHeight: (Platform.OS === 'ios' && multiline) ? (20 * (numberOfLines ?? 4)) : null,
                        height: inputHeight && multiline ? Math.max(35, Math.min(400, inputHeight)) : undefined,
                    },
                    disabled ? { opacity: 0.75 } : undefined,
                    INPUT_SIZES[size ?? "md"],
                    style as TextStyle,
                ]}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor ?? mutedTextColor ?? undefined}
                textAlignVertical={textAlignVertical}
                multiline={multiline}
                autoCorrect={autoCorrect}
                editable={!disabled}
                numberOfLines={Platform.OS === 'ios' && multiline ? undefined : (numberOfLines ?? 4)}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
                value={value}
                onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
                maxLength={maxLength}
                {...inputProps}
            />
        </View>
    )
}
const Input = memo(BaseInput);
Input.displayName = "Input";
export default Input;

const styles = StyleSheet.create({
    base: {
        height: "auto",
        borderRadius: BORDER_RADIUS,
    },
});