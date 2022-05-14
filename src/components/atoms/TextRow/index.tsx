import React from "react";

import { Text, View } from "react-native";

import { styles } from "./styles";

interface Props {
  field: string;
  data: string;
}

export function TextRow(props: Props) {
  const { field, data } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.field}>{`${field}:`}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}
