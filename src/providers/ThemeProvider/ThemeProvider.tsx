import { DarkTheme, DefaultTheme, ThemeProvider as RNThemeProvider } from "@react-navigation/native";
import { memo, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Context } from "@contexts/Theme";
import { EColorScheme } from "@constants/scheme";
import { PortalProvider } from "@gorhom/portal";
import { useColorScheme } from "react-native";
import { useFonts } from "@hooks/useFonts";

type Props = PropsWithChildren<{
    readonly theme?: EColorScheme;
}>;
function BaseProvider(props: Props) {
    const { theme: overriddenTheme } = props;
    const [theme, setTheme] = useState<EColorScheme>(overriddenTheme ?? EColorScheme.AUTO);

    const { fontLoaded } = useFonts();
    const systemTheme = useColorScheme();
    useEffect(() => setTheme(overriddenTheme as EColorScheme), [overriddenTheme]);

    const nativeTheme = useMemo(() => {
        const getTheme = (scheme: EColorScheme) => {
            switch (scheme) {
                case EColorScheme.LIGHT:
                    return DefaultTheme;
                case EColorScheme.DARK:
                    return DarkTheme;
                default: return DefaultTheme;
            }
        }
        if (theme === EColorScheme.AUTO) return getTheme(systemTheme as EColorScheme);
        return getTheme(theme);
    }, [theme]);

    return (
        <Context.Provider value={{ theme, setTheme, fontLoaded }}>
            <PortalProvider>
                <RNThemeProvider value={nativeTheme}>
                    {props.children}
                </RNThemeProvider>
            </PortalProvider>
        </Context.Provider>
    );
}
const ThemeProvider = memo(BaseProvider);
ThemeProvider.displayName = "ThemeProvider";
export default ThemeProvider;