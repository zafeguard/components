import { Fragment, memo } from "react";
import { LoaderProps } from "./constants";
import { ActivityIndicator } from "react-native";
import { VARIANTS } from "../../constants/variants";
import { View } from "../View";
import { Text } from "../Text";
import { useDot } from "./hooks/useDot";
import { Wrapper } from "./Wrapper";

function BaseLoader(props: LoaderProps) {
    const {
        text,
        color,
        direction,
        maxDots = 3,
        animate = false,
        overlay,
        backdrop,
        size,
        ...viewProps
    } = props;
    const { dots, counts } = useDot(maxDots);

    return (
        <Wrapper portal={overlay}>
            <View
                transparent={true}
                direction={direction}
                {...viewProps}
                // Overlay
                style={overlay ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 9999,
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    backgroundColor: backdrop?.backgroundColor ?? "black",
                    opacity: backdrop?.opacity ?? 0.85,
                } : {}}
            >
                <ActivityIndicator
                    color={color ?? VARIANTS.primary.background}
                    style={{
                        width: overlay ? "100%" : undefined
                    }}
                    size={size}
                />
                {text && (
                    <Text>
                        <Text size="sm" muted>
                            {text}{" "}
                        </Text>
                        {animate && (
                            <Fragment>
                                <Text size="sm" muted>
                                    {dots}
                                </Text>
                                <Text size="sm" style={{ opacity: 0 }}>
                                    {new Array(maxDots - counts).fill(".").join("")}
                                </Text>
                            </Fragment>
                        )}
                    </Text>
                )}
            </View>
        </Wrapper>
    )
}
const Loader = memo(BaseLoader);
Loader.displayName = "Loader";
export default Loader;