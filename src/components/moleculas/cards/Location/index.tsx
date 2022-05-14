import React, { useState } from "react";

import { Pressable } from "react-native";

import { TextRow } from "@components/atoms";
import { CharactersModal } from "@components/moleculas/modals";
import { Location } from "@mobx/models";

import { styles } from "./styles";

interface Props {
  location: Location;
}

export function LocationCard(props: Props) {
  const { location } = props;

  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <TextRow field="Name" data={location.name} />
        <TextRow field="Type" data={location.type} />
        <TextRow field="Dimension" data={location.dimension} />
        <TextRow field="Created" data={location.created} />
        <TextRow
          field="Residents"
          data={location.residents.length.toString()}
        />
      </Pressable>
      {location.residents?.length > 0 && (
        <CharactersModal
          toggle={toggleModal}
          title={location.name}
          isShown={isModalShown}
          charactersUrls={location.residents}
        />
      )}
    </>
  );
}
