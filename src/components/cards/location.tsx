import LocationModal from '@components/modals/location';
import TextRow from '@components/textRow';
import {Location} from '@models/location';
import Store from '@models/store';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
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
        <View>
          <TextRow field="Name" data={location.name} />
          <TextRow field="Type" data={location.type} />
          <TextRow field="Dimension" data={location.dimension} />
          <TextRow field="Created" data={location.created} />
        </View>
      </Pressable>
      {residents.length > 0 && (
        <LocationModal
          residents={residents}
          toggle={toggleModal}
          isShown={isModalShown}
        />
      )}
    </>
  );
}

export default LocationCard;

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
