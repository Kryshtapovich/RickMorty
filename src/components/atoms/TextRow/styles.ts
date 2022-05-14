import { StyleSheet } from "react-native";

import { Color, FontSize, Indent } from "@utils";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  field: {
    color: Color.BLACK,
    fontSize: FontSize.DEFAULT,
    marginRight: Indent.EXTRA_HUGE
  },
  data: {
    flex: 1,
    fontWeight: "bold",
    color: Color.BLACK,
    fontSize: FontSize.DEFAULT
  }
});
