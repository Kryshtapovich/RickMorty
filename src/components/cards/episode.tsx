import CharactersModal from '@components/modals/characters';
import TextRow from '@components/textRow';
import Episode from 'models/episode';
import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';

interface Props {
  episode: Episode;
}

function EpisodeCard({episode}: Props) {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <TextRow field="Name" data={episode.name} />
        <TextRow field="Air Date" data={episode.air_date} />
        <TextRow field="Code" data={episode.episode} />
        <TextRow field="Created" data={episode.created} />
        <TextRow
          field="Characters"
          data={episode.characters.length.toString()}
        />
      </Pressable>
      {episode.characters.length > 0 && (
        <CharactersModal
          title="Characters"
          toggle={toggleModal}
          isShown={isModalShown}
          characters={episode.characters}
        />
      )}
    </>
  );
}

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 15,
    height: 170,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'gray',
    justifyContent: 'space-between',
  },
});
