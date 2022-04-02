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
  const [characters, setCharacters] = useState<Array<ReducedCharacter>>();

  useEffect(() => {
    setIsloading(true);
    getReducedCharacters(characterUrls).then(res => {
      setCharacters(res);
      setIsloading(false);
    });
    return () => setCharacters(undefined);
  }, [isShown]);

  const getHeight = () => {
    if (characters) {
      if (characters.length > 10) {
        return { height: isPortrait ? 270 : 180 };
      } else {
        const multiplier = characters.length % 10;
        if (isPortrait)
          return { height: multiplier > 3 ? 270 : multiplier * 90 };
        else return { height: multiplier > 3 ? 180 : multiplier * 90 };
      }
    }
  };

  return (
    <Modal isShown={isShown} toggle={toggle} style={{ flex: 0 }}>
      <RN.Text style={styles.title}>{title}</RN.Text>
      {isLoading ? (
        <Spinner />
      ) : (
        <RN.ScrollView style={getHeight()}>
          {characters?.map(({ id, name, image }) => (
            <RN.View key={id} style={styles.character}>
              <RN.Image source={{ uri: image }} style={styles.image} />
              <RN.Text style={styles.text}>{name}</RN.Text>
            </RN.View>
          ))}
        </RN.ScrollView>
      )}
    </Modal>
  );
}

export default CharactersModal;

const styles = RN.StyleSheet.create({
  title: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  character: {
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
