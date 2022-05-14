import { StyleSheet } from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

export const styles = StyleSheet.create({
  container: {
    borderRadius: Radius.DEFAULT
  },
  input: {
    borderWidth: 2,
    color: Color.BLACK,
    padding: Indent.DEFAULT,
    fontSize: FontSize.DEFAULT,
    borderRadius: Radius.DEFAULT
  },
  error: {
    color: Color.RED,
    textAlign: "right"
  }
});
