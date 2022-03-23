import TextRow from '@components/textRow';
import useOrientation from '@hooks/useOrientation';
import {Character} from '@models/character';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface Props {
  character: Character;
}

function FullCharacterCard({character}: Props) {
  const {isPortrait} = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapeStyles;

  return (
    <View style={styles.container}>
      <Image source={{uri: character.image}} style={styles.image} />
      <View>
        <TextRow field="Name" data={character.name} />
        <TextRow field="Status" data={character.status} />
        <TextRow field="Gender" data={character.gender} />
        <TextRow field="Origin" data={character.origin?.name} />
        <TextRow field="Created" data={character.created} />
      </View>
    </View>
  );
}

export default FullCharacterCard;

const portraitStyles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 20,
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  image: {
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
});

const landscapeStyles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  image: {
    flex: 0.5,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
});
