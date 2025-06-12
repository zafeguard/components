import { View } from "@components/View";
import { ContainerProps } from "./constants";
import { memo } from "react";

function BaseContainer(props: ContainerProps) {
    const {
        children,
        style,
        ...rest
    } = props;
    return (
        <View
            flex={1}
            style={[
                style,
                { display: "contents" }
            ]}
            {...rest}
        >
            {children}
        </View>
    )
}
const Container = memo(BaseContainer);
Container.displayName = "Container";
export default Container;