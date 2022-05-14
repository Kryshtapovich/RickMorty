import { StyleSheet } from "react-native";

import { Color, FontSize, Indent } from "@utils";

export const baseStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  },
  nameContainer: {
    alignItems: "center"
  },
  displayName: {
    fontWeight: "bold",
    color: Color.WHITE,
    fontSize: FontSize.HUGE
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 250,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "80%"
  },
  input: {
    marginTop: Indent.MEDIUM
  },
  buttons: {
    flexDirection: "row",
    marginTop: Indent.MEDIUM
  },
  button: {
    flex: 1
  },
  updateButton: {
    marginRight: Indent.DEFAULT,
    backgroundColor: Color.GRAY
  }
});

export const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  screen: {
    ...baseStyles.screen,
    flexDirection: "row"
  },
  image: {
    ...baseStyles.image,
    width: 270,
    height: 270
  },
  form: {
    width: "60%",
    marginLeft: Indent.MEDIUM
  }
});
