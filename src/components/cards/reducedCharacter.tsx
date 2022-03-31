import CharacterDetailsModal from '@components/modals/characterDetails';
import {Character} from 'models/character';
import React, {useState} from 'react';
import * as RN from 'react-native';

interface Props {
  character: Character;
}

function ReducedCharacterCard({character}: Props) {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <RN.Pressable style={styles.container} onPress={toggleModal}>
        <RN.Image source={{uri: character.image}} style={styles.image} />
        <RN.Text style={styles.text}>{character.name}</RN.Text>
      </RN.Pressable>
      <CharacterDetailsModal
        character={character}
        isShown={isModalShown}
        toggle={toggleModal}
      />
    </>
  );
}

export default ReducedCharacterCard;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 12,
    borderRadius: 20,
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
