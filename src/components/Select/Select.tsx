import { memo, useState } from "react"
import { SelectProps } from "./constants";
import { View } from "../View";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "../Icon";
import { Text } from "../Text";

function BaseSelect<T extends any>(props: SelectProps<T>) {
    const {
        gap = 4,
        data,
        value,
        disabled,
        onChange,
        itemComponent: ItemComponent,
        icons
    } = props;

    const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

    return (
        <View transparent gap={gap} flex={1}>
            {data.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.radioItem,
                        disabled && { opacity: 0.60 }
                    ]}
                    onPress={() => setSelectedValue(item.value)}
                    disabled={disabled}
                >
                    {ItemComponent ? (
                        <ItemComponent selectedValue={selectedValue} {...item} />
                    ) : (
                        <View gap={8} flex={1} direction="row" align="center">
                            <Icon
                                name={item.value === selectedValue ? (icons?.selected ?? "dot-circle-o") : (icons?.unselected ?? "circle-o")}
                                size={22}
                            />
                            <Text>{item.label}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            ))}
        </View>
    )
}
const Select = memo(BaseSelect);
Select.displayName = "Select";
export default Select;

const styles = StyleSheet.create({
    radioItem: {
        flex: 1,
        justifyContent: "flex-start",
        width: "100%",
        flexDirection: "row",
    }
})