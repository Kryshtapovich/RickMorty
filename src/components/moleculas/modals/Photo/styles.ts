import { StyleSheet } from "react-native";

import { Color, FontSize } from "@utils";

export const baseStyles = StyleSheet.create({
  modal: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    alignItems: "center"
  },
  text: {
    color: Color.BLACK,
    fontSize: FontSize.DEFAULT
  }
});

export const landscapelStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    ...baseStyles.modal,
    width: "50%"
  }
});
