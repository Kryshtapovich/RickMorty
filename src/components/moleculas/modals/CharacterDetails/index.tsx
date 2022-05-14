import React from "react";

import { Image, Text, View } from "react-native";

import { Modal, TextRow } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Character } from "@mobx/models";

import { landscapeStyles, portraitStyles } from "./styles";

interface Props {
  character: Character;
  isShown: boolean;
  toggle: () => void;
}

export function CharacterDetailsModal(props: Props) {
  const { character, isShown, toggle } = props;

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapeStyles;

  return (
    <Modal isShown={isShown} toggle={toggle} style={styles.modal}>
      <Text style={styles.name}>{character.name}</Text>
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
