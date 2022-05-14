import { StyleSheet } from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: Indent.DEFAULT,
    justifyContent: "space-between"
  },
  input: {
    flex: 1,
    color: Color.BLACK,
    padding: Indent.HUGE,
    fontSize: FontSize.DEFAULT,
    borderRadius: Radius.MEDIUM,
    marginHorizontal: Indent.DEFAULT,
    backgroundColor: Color.TRANSPARENT_CYAN
  }
});
