import { StyleSheet } from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: Indent.DEFAULT,
    justifyContent: "center",
    borderRadius: Radius.DEFAULT,
    backgroundColor: Color.BLUE_LIGHT
  },
  buttonText: {
    fontWeight: "500",
    color: Color.WHITE,
    fontSize: FontSize.DEFAULT
  }
});
