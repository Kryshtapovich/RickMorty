import TextRow from "@components/textRow";
import useOrientation from "@hooks/useOrientation";
import Character from "@models/character";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
    <Modal isShown={isShown} toggle={toggle}>
      <View style={styles.infoBlock}>
        <Text style={styles.name}>{character.name}</Text>
        <View style={styles.body}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View style={styles.textBlock}>
            <TextRow field="Status" data={character.status} />
            <TextRow field="Gender" data={character.gender} />
            <TextRow field="Origin" data={character.origin?.name} />
            <TextRow field="Created" data={character.created} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CharacterDetailsModal;

const baseStyles = StyleSheet.create({
  infoBlock: { flex: 1 },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  body: { flex: 1 },
  image: {
    aspectRatio: 1,
    borderRadius: 20,
  },
  textBlock: { flex: 0.5, justifyContent: "space-between" },
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  image: {
    ...baseStyles.image,
    flex: 1,
    marginBottom: 10,
  },
});

const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  body: {
    ...baseStyles.body,
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    ...baseStyles.image,
    width: 155,
    marginRight: 15,
  },
  textBlock: {
    ...baseStyles.textBlock,
    flex: 1,
    height: "87%",
  },
});
