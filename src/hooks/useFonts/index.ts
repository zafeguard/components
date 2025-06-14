import { useFonts as useExpoFonts } from 'expo-font';

function useFonts() {
    const [fontLoaded] = useExpoFonts({
        SpaceMono: require('@assets/fonts/SpaceMono-Regular.ttf'),
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

    return { fontLoaded };
}
export { useFonts };