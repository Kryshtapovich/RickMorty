import { useColorScheme } from "react-native";

import { DarkTheme, LightTheme } from "@utils";

export function useTheme() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";
  const theme = { isDark, colors: isDark ? DarkTheme : LightTheme };
  return theme;
}
