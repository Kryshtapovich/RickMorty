import CharactersModal from '@components/modals/characters';
import TextRow from '@components/textRow';
import Location from '@models/location';
import Store from '@models/store';
import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

interface Props {
  location: Location;
}

function LocationCard({location}: Props) {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  const residents = useSelector(({characterReducer}: Store) =>
    characterReducer.characterList.filter(({url}) =>
      location.residents.includes(url),
    ),
  );

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <TextRow field="Name" data={location.name} />
        <TextRow field="Type" data={location.type} />
        <TextRow field="Dimension" data={location.dimension} />
        <TextRow field="Created" data={location.created} />
        <TextRow field="Residents" data={residents.length.toString()} />
      </Pressable>
      {residents.length > 0 && (
        <CharactersModal
          title="Residents"
          toggle={toggleModal}
          characters={residents}
          isShown={isModalShown}
        />
      )}
    </>
  );
}

export default LocationCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});
