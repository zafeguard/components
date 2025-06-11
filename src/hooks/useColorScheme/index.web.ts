import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';
import { useTheme } from '../../contexts/Theme';
import { EColorScheme } from '../../constants/scheme';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const { theme } = useTheme();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    if (theme === EColorScheme.AUTO)
      return colorScheme;
    return theme;
  }

  return EColorScheme.LIGHT;
}
