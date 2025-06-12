import { View } from "@components/View";
import { ContainerProps } from "./constants";
import { memo } from "react";

function BaseContainer(props: ContainerProps) {
    const {
        children,
        style
    } = props;
    return (
        <View
            style={[
                style,
                { display: "contents" }
            ]}
        >
            {children}
        </View>
    )
}
const Container = memo(BaseContainer);
Container.displayName = "Container";
export default Container;