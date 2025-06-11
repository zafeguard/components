import { DarkTheme, DefaultTheme, ThemeProvider as RNThemeProvider } from "@react-navigation/native";
import { memo, PropsWithChildren, useMemo, useState } from "react";
import { Context } from "@contexts/Theme";
import { EColorScheme } from "@constants/scheme";
import { useFonts } from 'expo-font';
import { PortalProvider } from "@gorhom/portal";

type Props = PropsWithChildren<{
    readonly theme?: EColorScheme;
}>;
function Provider(props: Props) {
    const { theme: overriddenTheme } = props;
    const [theme, setTheme] = useState<EColorScheme>(overriddenTheme ?? EColorScheme.AUTO);

    const nativeTheme = useMemo(() => {
        switch (overriddenTheme ?? theme) {
            case EColorScheme.LIGHT:
                return DefaultTheme;
            case EColorScheme.DARK:
                return DarkTheme;
            default: return DefaultTheme;
        }
    }, [overriddenTheme, theme]);

    const [fontLoaded] = useFonts({
        'Poppins-Regular': require('@assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('@assets/fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('@assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Italic': require('@assets/fonts/Poppins-Italic.ttf'),
        'Poppins-BoldItalic': require('@assets/fonts/Poppins-BoldItalic.ttf'),
        'Poppins-Light': require('@assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('@assets/fonts/Poppins-Medium.ttf'),
        'Monospace': require('@assets/fonts/Monospace.ttf'),
        'Monospace-Bold': require('@assets/fonts/Monospace-Bold.ttf'),
    });

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
const ThemeProvider = memo(Provider);
export { ThemeProvider };