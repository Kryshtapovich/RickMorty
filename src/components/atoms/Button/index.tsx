import React from "react";

import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle
} from "react-native";

import { styles } from "./styles";

interface Props {
  text: string;
  textStyle?: TextStyle;
}

type ButtonProps = Omit<PressableProps, "children"> & Props;

export function Button(props: ButtonProps) {
  const { text, textStyle, style, ...rest } = props;

  return (
    <Pressable style={[styles.button, style as StyleProp<ViewStyle>]} {...rest}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
}
