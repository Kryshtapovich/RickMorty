import { Platform, StyleSheet } from "react-native";

import { Color, Indent } from "@utils";

const baseStyles = StyleSheet.create({
  container: {
    backgroundColor: Color.NONE
  },
  bar: {
    shadowOpacity: 1,
    shadowColor: Color.BLACK,
    shadowRadius: Indent.DEFAULT,
    shadowOffset: { width: 0, height: 0 }
  },
  loginTab: {
    display: "none"
  },
  image: {
    height: "100%"
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  }
});

export const styles = StyleSheet.create({
  ...baseStyles,
  bar: {
    ...Platform.select({
      android: {
        ...baseStyles.bar,
        elevation: Indent.HUGE
      }
    })
  }
});
