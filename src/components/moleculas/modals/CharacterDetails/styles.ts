import { Platform, StyleSheet } from "react-native";

import { Color, FontSize, Indent, Radius } from "@utils";

const baseStyles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    color: Color.BLACK,
    textAlign: "center",
    fontSize: FontSize.MEDIUM
  },
  image: {
    aspectRatio: 1,
    borderRadius: Radius.DEFAULT
  },
  infoBlock: {
    flex: 1
  }
});

export const portraitStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    height: Platform.select({ ios: "68%", android: "75%" })
  },
  name: {
    ...baseStyles.name,
    marginBottom: Indent.DEFAULT
  },
  image: {
    ...baseStyles.image,
    width: "100%"
  },
  textBlock: {
    height: 170,
    marginTop: Indent.DEFAULT,
    justifyContent: "space-between"
  }
});

export const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: 0.6
  },
  infoBlock: {
    ...baseStyles.infoBlock,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    ...baseStyles.image,
    marginRight: Indent.HUGE,
    flex: 0.5
  },
  textBlock: {
    flex: 1,
    height: 170,
    justifyContent: "space-between"
  }
});
