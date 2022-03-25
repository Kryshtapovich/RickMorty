import LocationModal from "@components/modals/location";
import TextRow from "@components/textRow";
import { Episode } from "@models/episode";
import Store from "@models/store";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

interface Props {
  episode: Episode;
}

function EpisodeCard({episode}: Props) {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  const characters = useSelector(({characterReducer}: Store) =>
    characterReducer.characterList.filter(({url}) =>
      episode.characters.includes(url),
    ),
  );

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <View>
          <TextRow field="Name" data={episode.name} />
          <TextRow field="Air Date" data={episode.air_date} />
          <TextRow field="Code" data={episode.episode} />
          <TextRow field="Created" data={episode.created} />
        </View>
      </Pressable>
      {characters.length > 0 && (
        <LocationModal
          residents={characters}
          toggle={toggleModal}
          isShown={isModalShown}
        />
      )}
    </>
  );
}

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});
