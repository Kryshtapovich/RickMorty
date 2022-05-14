import React, { useState } from "react";

import { Image, Pressable, Text } from "react-native";

import { CharacterDetailsModal } from "@components/moleculas/modals";
import { Character } from "@mobx/models";

import { styles } from "./styles";

interface Props {
  character: Character;
}

export function CharacterCard(props: Props) {
  const { character } = props;

  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <Text style={styles.text}>{character.name}</Text>
      </Pressable>
      <CharacterDetailsModal
        character={character}
        isShown={isModalShown}
        toggle={toggleModal}
      />
    </>
  );
}
