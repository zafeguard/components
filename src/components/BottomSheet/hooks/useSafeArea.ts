import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export function useSafeArea(): EdgeInsets {
    try {
        const insets = useSafeAreaInsets();
        return insets;
    } catch {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }
    }
}