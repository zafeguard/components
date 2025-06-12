import { useColorScheme as useRNColorScheme } from 'react-native';
import { useTheme } from '@contexts/Theme';
import { EColorScheme } from '@constants/scheme';

export function useColorScheme () {
    const scheme = useRNColorScheme();
    const { theme } = useTheme();

    if (theme === EColorScheme.AUTO)
        return scheme;
    return theme;
}
