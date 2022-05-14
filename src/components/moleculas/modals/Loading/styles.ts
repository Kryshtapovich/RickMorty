import { StyleSheet } from "react-native";

import { Color } from "@utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  }
});
