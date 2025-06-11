/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { COLORS } from "@constants/variants";
import { useColorScheme } from "./useColorScheme";

export function useThemeColor(
  colorName: keyof typeof COLORS.light & keyof typeof COLORS.dark
) {
  const theme = useColorScheme() ?? 'light';

  return COLORS[theme][colorName];
}
