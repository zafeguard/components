import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import useReady from "./useReady";

export default function useKeyboard() {
    const { isReady } = useReady();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const onDidShow = useCallback(() => setIsVisible(true), []);
    const onWillHide = useCallback(() => setIsVisible(false), []);

    useEffect(() => {
        if (!isReady) return;

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', onDidShow);
        const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', onWillHide);
        return () => {
            keyboardDidShowListener.remove();
            keyboardWillHideListener.remove();
        };
    }, [isReady, onDidShow, onWillHide]);
    const dismiss = useCallback(Keyboard.dismiss, []);

    return { isVisible, dismiss };
}