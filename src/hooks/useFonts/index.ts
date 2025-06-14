import { useFonts as useExpoFonts } from 'expo-font';

function useFonts() {
    const [fontLoaded] = useExpoFonts({
        SpaceMono: require('./fonts/SpaceMono-Regular.ttf'),
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

    return { fontLoaded };
}
export { useFonts };