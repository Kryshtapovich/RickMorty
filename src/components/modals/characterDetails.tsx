import TextRow from "@components/textRow";
import useOrientation from "@hooks/useOrientation";
import Character from "@models/character";
import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";

import Modal from ".";

interface Props {
  character: Character;
  isShown: boolean;
  toggle: () => void;
}

function CharacterDetailsModal(props: Props) {
  const { character, isShown, toggle } = props;

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapeStyles;

  return (
    <Modal isShown={isShown} toggle={toggle} style={styles.modal}>
      <View style={styles.infoBlock}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <View style={styles.textBlock}>
          <TextRow field="Status" data={character.status} />
          <TextRow field="Gender" data={character.gender} />
          <TextRow field="Origin" data={character.origin?.name} />
          <TextRow field="Created" data={character.created} />
        </View>
      </View>
    </Modal>
  );
}

export default CharacterDetailsModal;

const baseStyles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    borderRadius: 20,
  },
  textBlock: { height: "30%", justifyContent: "space-between" },
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    height: Platform.select({ ios: "67%", android: "85%" }),
  },
  image: {
    ...baseStyles.image,
    marginBottom: 10,
    width: "100%",
  },
  infoBlock: {},
});

const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    height: "65%",
  },
  infoBlock: {
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    ...baseStyles.image,
    width: "30%",
    marginRight: 15,
  },
  textBlock: {
    ...baseStyles.textBlock,
    width: "100%",
    height: "70%",
  },
});
