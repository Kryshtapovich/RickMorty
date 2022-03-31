import CharactersModal from '@components/modals/characters';
import TextRow from '@components/textRow';
import Location from 'models/location';
import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';

interface Props {
  location: Location;
}

function LocationCard({location}: Props) {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <TextRow field="Name" data={location.name} />
        <TextRow field="Type" data={location.type} />
        <TextRow field="Dimension" data={location.dimension} />
        <TextRow field="Created" data={location.created} />
        <TextRow field="Residents" data={location.residents.length.toString()} />
      </Pressable>
      {location.residents.length > 0 && (
        <CharactersModal
          title="Residents"
          toggle={toggleModal}
          isShown={isModalShown}
          characters={location.residents}
        />
      )}
    </>
  );
}

export default (LocationCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 15,
    height: 170,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'gray',
    justifyContent: "space-between",
  },
});
