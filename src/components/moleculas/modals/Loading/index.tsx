import React from "react";

import { View } from "react-native";

import { Spinner } from "@components/atoms";

import { styles } from "./styles";

export function LoadingModal() {
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
}
