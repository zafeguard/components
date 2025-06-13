import { DarkTheme, DefaultTheme, ThemeProvider as RNThemeProvider } from "@react-navigation/native";
import { memo, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Context } from "@contexts/Theme";
import { EColorScheme } from "@constants/scheme";
import { useFonts } from 'expo-font';
import { PortalProvider } from "@gorhom/portal";

type Props = PropsWithChildren<{
    readonly theme?: EColorScheme;
}>;
function BaseProvider(props: Props) {
    const { theme: overriddenTheme } = props;
    const [theme, setTheme] = useState<EColorScheme>(overriddenTheme ?? EColorScheme.AUTO);

    useEffect(() => setTheme(overriddenTheme as EColorScheme), [overriddenTheme]);

    const nativeTheme = useMemo(() => {
        switch (theme) {
            case EColorScheme.LIGHT:
                return DefaultTheme;
            case EColorScheme.DARK:
                return DarkTheme;
            default: return DefaultTheme;
        }
    }, [theme]);

    const [fontLoaded] = useFonts({
        'Poppins-Regular': require('./fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('./fonts/Poppins-SemiBold.ttf'),
        'Poppins-Italic': require('./fonts/Poppins-Italic.ttf'),
        'Poppins-BoldItalic': require('./fonts/Poppins-BoldItalic.ttf'),
        'Poppins-Light': require('./fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('./fonts/Poppins-Medium.ttf'),
        'Monospace': require('./fonts/Monospace.ttf'),
        'Monospace-Bold': require('./fonts/Monospace-Bold.ttf'),
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
const ThemeProvider = memo(BaseProvider);
ThemeProvider.displayName = "ThemeProvider";
export default ThemeProvider;