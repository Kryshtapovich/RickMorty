import React, { useState } from "react";

import { Pressable } from "react-native";

import { TextRow } from "@components/atoms";
import { CharactersModal } from "@components/moleculas/modals";
import { Episode } from "@mobx/models";

import { styles } from "./styles";

interface Props {
  episode: Episode;
}

export function EpisodeCard(props: Props) {
  const { episode } = props;

  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <TextRow field="Name" data={episode.name} />
        <TextRow field="Air Date" data={episode.air_date} />
        <TextRow field="Code" data={episode.episode} />
        <TextRow field="Created" data={episode.created} />
      </Pressable>
      {episode.characters?.length > 0 && (
        <CharactersModal
          title={episode.name}
          toggle={toggleModal}
          isShown={isModalShown}
          charactersUrls={episode.characters}
        />
      )}
    </>
  );
}
