import { Platform, StyleSheet } from "react-native";

import { Indent } from "@utils";

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.select({ android: Indent.HUGE * 2 })
  }
});
