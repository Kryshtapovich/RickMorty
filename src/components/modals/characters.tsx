import Spinner from "@components/spinner";
import useOrientation from "@hooks/useOrientation";
import { ReducedCharacter } from "@models/character";
import { getReducedCharacters } from "@services/character";
import React, { useEffect, useState } from "react";
import * as RN from "react-native";

import Modal from ".";

interface Props {
  title: string;
  isShown: boolean;
  toggle: () => void;
  characterUrls: Array<string>;
}

function CharactersModal(props: Props) {
  const { characterUrls, isShown, toggle, title } = props;

  const { isPortrait } = useOrientation();

  const [isLoading, setIsloading] = useState(false);
  const [characters, setCharacters] = useState<Array<ReducedCharacter>>([]);

  useEffect(() => {
    setIsloading(true);
    getReducedCharacters(characterUrls).then(res => {
      setCharacters(res);
      setIsloading(false);
    });
    return () => setCharacters([]);
  }, [isShown]);

  const styles = isPortrait ? portraitStyles : landscapelStyles;

  const getCharacter = ({ image, name }: ReducedCharacter) => (
    <RN.View style={styles.character}>
      <RN.Image source={{ uri: image }} style={styles.image} />
      <RN.Text style={styles.text}>{name}</RN.Text>
    </RN.View>
  );

  return (
    <Modal isShown={isShown} toggle={toggle} style={styles.modal}>
      <RN.Text style={styles.title}>{title}</RN.Text>
      {isLoading ? (
        <Spinner />
      ) : (
        <RN.FlatList
          data={characters}
          key={Number(isPortrait)}
          numColumns={isPortrait ? 1 : 2}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => getCharacter(item)}
        />
      )}
    </Modal>
  );
}

export default CharactersModal;

const baseStyles = RN.StyleSheet.create({
  title: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  character: {
    flex: 1,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 50,
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
  },
});

const portraitStyles = RN.StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: 0.5,
    width: "85%",
  },
});

const landscapelStyles = RN.StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: 0.8,
    width: 520,
  },
  character: {
    ...baseStyles.character,
    margin: 10,
  },
});
