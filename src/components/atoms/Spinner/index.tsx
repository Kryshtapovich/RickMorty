import React from "react";

import { ActivityIndicator } from "react-native";

import { Color } from "@utils";

import { styles } from "./styles";

export function Spinner() {
  return (
    <ActivityIndicator
      animating
      size="large"
      style={styles.spinner}
      color={Color.BLUE_LIGHT}
    />
  );
}
