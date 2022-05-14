import React from "react";

import {
  Modal as RnModal,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleProp,
  ViewStyle
} from "react-native";

import { useOrientation } from "@hooks";

import { landscapelStyles, portraitStyles } from "./styles";

interface Props {
  isShown: boolean;
  toggle: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Modal(props: React.PropsWithChildren<Props>) {
  const { isShown, toggle, children, style } = props;

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapelStyles;

  return (
    <RnModal
      transparent
      animationType="fade"
      visible={isShown}
      onRequestClose={toggle}
      supportedOrientations={["portrait", "landscape"]}
    >
      <TouchableOpacity style={styles.container} onPressOut={toggle}>
        <TouchableWithoutFeedback>
          <View style={[styles.content, style]}>{children}</View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </RnModal>
  );
}
