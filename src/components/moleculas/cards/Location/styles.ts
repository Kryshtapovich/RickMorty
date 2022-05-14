import { StyleSheet } from "react-native";

import { Color, Indent, Radius } from "@utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 170,
    alignItems: "center",
    padding: Indent.HUGE,
    margin: Indent.DEFAULT,
    borderRadius: Radius.DEFAULT,
    justifyContent: "space-between",
    backgroundColor: Color.TRANSPARENT_CYAN
  }
});
