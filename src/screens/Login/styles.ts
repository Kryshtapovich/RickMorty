import { StyleSheet } from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  },
  form: {
    padding: Indent.MEDIUM,
    borderRadius: Radius.DEFAULT,
    backgroundColor: Color.TRANSPARENT_CYAN
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: Color.BLUE_LIGHT,
    fontSize: FontSize.HUGE,
    marginBottom: Indent.MEDIUM
  },
  input: {
    marginBottom: Indent.MEDIUM
  },
  redirectText: {
    alignSelf: "flex-start",
    color: Color.BLUE_LIGHT,
    fontSize: FontSize.SMALL,
    textDecorationLine: "underline"
  },
  button: {
    marginTop: Indent.MEDIUM
  },
  error: {
    color: Color.RED,
    marginTop: Indent.DEFAULT
  }
});
