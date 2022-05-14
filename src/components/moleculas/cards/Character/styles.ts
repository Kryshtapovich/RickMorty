import { StyleSheet } from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Indent.DEFAULT,
    padding: Indent.MEDIUM,
    flexDirection: "column",
    borderRadius: Radius.DEFAULT,
    backgroundColor: Color.TRANSPARENT_CYAN
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: Indent.DEFAULT,
    borderRadius: Radius.DEFAULT
  },
  text: {
    fontWeight: "bold",
    color: Color.BLACK,
    textAlign: "center",
    fontSize: FontSize.DEFAULT
  }
});
