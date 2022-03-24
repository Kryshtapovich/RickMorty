import LocationModal from '@components/modals/location';
import {Location} from '@models/location';
import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

interface Props {
  location: Location;
}

function LocationCard({location}: Props) {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => setIsModalShown(!isModalShown);

  return (
    <>
      <Pressable style={styles.container} onPress={toggleModal}>
        <Text style={styles.text}>{`${location.id}.`}</Text>
        <Text style={[styles.text, styles.name]}>{location.name}</Text>
      </Pressable>
      <LocationModal
        location={location}
        toggle={toggleModal}
        isShown={isModalShown}
      />
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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    marginLeft: 10,
  },
});
