import { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { PinPadButtonProps } from "./constants";
import { Text } from "../Text";

function BaseButton(props: PinPadButtonProps) {
    const {
        number,
        disabled,
        onPress,
        height,
    } = props;
    return (
        <TouchableOpacity
            disabled={disabled}
            style={[styles.buttonContainer, { height }]}
            onPress={onPress}
        >
            <Text center size="lg">{number}</Text>
        </TouchableOpacity>
    );
}
const Button = memo(BaseButton);
Button.displayName = "Button";
export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
    },
})