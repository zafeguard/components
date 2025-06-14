import { forwardRef, memo, Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { BottomSheetProps, EBottomSheetState } from "./constants";
import CoreBottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { Dimensions, StyleSheet } from "react-native";
import { useThemeColor } from "@hooks/useThemeColor";
import { toRGB } from "@libs/color";
import { useSafeArea } from "./hooks/useSafeArea";
import useKeyboard from "@hooks/useKeyboard";
import useReady from "@hooks/useReady";

const BackdropComponent = memo((props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props}
        enableTouchThrough={false}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
    />
));
const BaseBottomSheet = forwardRef<CoreBottomSheet, BottomSheetProps>((props: BottomSheetProps, outerRef: Ref<CoreBottomSheet>) => {
    const {
        children,
        height,
        bottomInset = 0,
        onClose,
        onStateChange,
        defaultOpen = false
    } = props;

    const { isReady } = useReady();
    const { isVisible: isKeyboardVisible, dismiss: dismissKeyboard } = useKeyboard();
    const innerRef = useRef<CoreBottomSheet>(null);
    const { top, bottom } = useSafeArea();
    const { default: backgroundColor } = useThemeColor("background");
    const { default: textColor } = useThemeColor("text");
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
    const [isCloseRequested, setIsCloseRequested] = useState<boolean>(defaultOpen ? true : false);
    const onChange = useCallback((index: number) => {
        setIsOpen(index >= 0)
    }, [isReady]);
    const contentHeight = useMemo(() => height ?? Dimensions.get("screen").height * 0.25, [height]);

    useImperativeHandle(outerRef, () => ({
        expand: innerRef.current?.expand.bind(innerRef.current) ?? (() => { }),
        collapse: innerRef.current?.collapse.bind(innerRef.current) ?? (() => { }),
        snapToIndex: innerRef.current?.snapToIndex.bind(innerRef.current) ?? (() => { }),
        close: innerRef.current?.close.bind(innerRef.current) ?? (() => { }),
        snapToPosition: innerRef.current?.snapToPosition.bind(innerRef.current) ?? (() => { }),
        forceClose: innerRef.current?.forceClose.bind(innerRef.current) ?? (() => { }),
    }), []);

    const snapToPoint = useCallback(() => {
        if (!isReady) return;
        if (!innerRef.current) return false;
        setIsCloseRequested(false);
        innerRef.current.snapToIndex(0);
        return true;
    }, [innerRef.current, isReady]);

    const handleClose = useCallback(() => {
        if (!isOpen || !isReady) return;
        if (typeof onClose !== "function") return;
        dismissKeyboard();
        onClose();
        setIsCloseRequested(true);
    }, [isReady, isOpen, onClose]);

    useEffect(() => {
        if (!isReady || isCloseRequested) return handleClose();
        if (isOpen && !isKeyboardVisible) {
            snapToPoint();
            return;
        }
        handleClose();
    }, [isCloseRequested, isReady, isKeyboardVisible, isOpen, handleClose, snapToPoint]);

    useEffect(() => {
        if (typeof onStateChange !== "function") return;
        if (isOpen) return onStateChange(EBottomSheetState.OPEN);
        return onStateChange(EBottomSheetState.CLOSED);
    }, [isOpen])

    return (
        <CoreBottomSheet
            ref={innerRef}
            index={defaultOpen ? 0 : -1}
            onChange={onChange}
            onClose={() => setIsCloseRequested(true)}
            snapPoints={[contentHeight]}
            enableDynamicSizing={false}
            topInset={top}
            enablePanDownToClose
            bottomInset={bottom + bottomInset}
            detached
            style={[
                styles.wrapper,
                {
                    paddingBottom: bottom / 2,
                }
            ]}
            backdropComponent={BackdropComponent}
            maxDynamicContentSize={contentHeight}
            handleIndicatorStyle={{ backgroundColor: toRGB(textColor, 0.25) }}
            backgroundStyle={{ backgroundColor }}
        >
            {children}
        </CoreBottomSheet>
    );
})
type BottomSheet = CoreBottomSheet;
const BottomSheet = memo(BaseBottomSheet);
BottomSheet.displayName = "BottomSheet";
export default BottomSheet;

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 24,
    },
});