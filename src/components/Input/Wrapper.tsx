import { memo } from "react";
import { TextInput, TextInputProps } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

type TextInputRenderType = "react-native" | "bottom-sheet";
type TextInputSwitcherProps<T> = T & {
    readonly renderType: TextInputRenderType;
};
function BaseWrapper<T extends TextInputProps = TextInputProps>(props: TextInputSwitcherProps<T>) {
    const {
        renderType = "react-native",
        ...inputProps
    } = props;

    if (renderType === "bottom-sheet") return <BottomSheetTextInput {...inputProps} />;
    return <TextInput {...inputProps} />;
}
const Wrapper = memo(BaseWrapper);
Wrapper.displayName = "Wrapper";
export { Wrapper };