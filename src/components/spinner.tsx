import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

function Spinner() {
  return (
    <ActivityIndicator style={spinner} animating size="large" color="#0000ff" />
  );
}

export default Spinner;

const { spinner } = StyleSheet.create({
  spinner: {
    margin: 20,
  },
});
