import { EColorScheme } from "@constants/scheme";
import { useColorScheme } from "./useColorScheme";

export function useInvertColorScheme () {
    const theme = useColorScheme();
    if (theme === EColorScheme.DARK) return EColorScheme.LIGHT;
    if (theme === EColorScheme.LIGHT) return EColorScheme.DARK;
    return theme;
}