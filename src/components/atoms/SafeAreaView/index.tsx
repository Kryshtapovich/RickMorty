import React from "react";

import { SafeAreaView as DefaultSafeAreaView } from "react-native";

import { SafeAreaViewProps } from "react-native-safe-area-context";

import { styles } from "./styles";

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, ...rest } = props;
  return <DefaultSafeAreaView {...rest} style={[style, styles.container]} />;
}
