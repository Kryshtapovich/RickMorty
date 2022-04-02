import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  field: string;
  data: string;
}

function TextRow({ field, data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>{`${field}:`}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

export default TextRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  field: {
    fontSize: 18,
    marginRight: 20,
  },
  data: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
});
