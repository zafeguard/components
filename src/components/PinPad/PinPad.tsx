import { View } from "../View";
import _ from "lodash";
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import Button from "./Button";
import { PinPadProps } from "./constants";

function BasePinPad(props: PinPadProps) {
    const {
        shuffle,
        height = 52,
        onPress,
    } = props;
    const numpads = useMemo(() => {
        const nums = _.range(10).map((num) => (num + 1) % 10);
        if (shuffle) return _.shuffle(nums);
        return nums;
    }, [shuffle]);
    return (
        <View transparent style={[styles.container]} flex={1} gap={0}>
            <View style={[styles.buttonAreaContainer]} flex={1} gap={0} justify="center">
                {numpads.map((num) => (
                    <Button
                        height={height}
                        key={num}
                        number={num}
                        onPress={() => onPress?.(num)}
                    />
                ))}
            </View>
        </View>
    );
}
const PinPad = memo(BasePinPad);
PinPad.displayName = "PinPad";
export default PinPad;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    buttonAreaContainer: {
        alignItems: "center",
        alignContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
})