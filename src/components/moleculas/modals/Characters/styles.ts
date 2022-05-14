import { StyleSheet } from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

export const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: Color.BLACK,
    textAlign: "center",
    fontSize: FontSize.MEDIUM,
    paddingBottom: Indent.DEFAULT
  },
  character: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Indent.MEDIUM
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: Indent.EXTRA_HUGE
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: Radius.HUGE,
    marginRight: Indent.DEFAULT
  },
  text: {
    fontWeight: "600",
    color: Color.BLACK,
    fontSize: FontSize.MEDIUM
  }
});
