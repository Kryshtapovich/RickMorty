import React from "react";

import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from "react-native";

import { Color } from "@utils";

import { styles } from "./styles";

interface Props {
  error?: string;
  inputStyle?: StyleProp<ViewStyle>;
}

export function Input(props: TextInputProps & Props) {
  const { error, style, inputStyle, ...rest } = props;

  const input = [
    styles.input,
    { borderColor: error ? Color.RED : Color.BLUE_LIGHT },
    inputStyle
  ];

  return (
    <View style={[styles.container, style]}>
      <TextInput {...rest} style={input} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
