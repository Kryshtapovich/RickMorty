import { StyleSheet } from "react-native";

import { Color, Indent, Radius } from "@utils";

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  },
  content: {
    borderRadius: Radius.DEFAULT,
    paddingVertical: Indent.DEFAULT,
    backgroundColor: Color.CYAN_LIGHT,
    paddingHorizontal: Indent.EXTRA_HUGE
  }
});

export const portraitStyles = StyleSheet.create({
  ...baseStyles,
  content: {
    ...baseStyles.content,
    width: "91%"
  }
});

export const landscapelStyles = StyleSheet.create({
  ...baseStyles,
  content: {
    ...baseStyles.content,
    width: "70%"
  }
});
