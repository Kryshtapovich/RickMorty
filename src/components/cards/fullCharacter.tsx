import {useQuery} from '@apollo/client';
import Spinner from '@components/spinner';
import TextRow from '@components/textRow';
import useOrientation from '@hooks/useOrientation';
import {fixDate} from '@services';
import {CharacterQuery} from '@services/character';
import {Character} from 'models/character';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface Props {
  id: number;
}

function FullCharacterCard({id}: Props) {
  const {isPortrait} = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapeStyles;

  const {data, loading} = useQuery<{character: Character}>(CharacterQuery, {
    variables: {id},
  });

  if (data && !loading) {
    const character = fixDate(data.character);
    return (
      <View style={styles.container}>
        <Image source={{uri: character.image}} style={styles.image} />
        <View style={styles.textBlock}>
          <TextRow field="Name" data={character.name} />
          <TextRow field="Status" data={character.status} />
          <TextRow field="Species" data={character.species} />
          <TextRow field="Gender" data={character.gender} />
          <TextRow field="Origin" data={character.origin?.name} />
          <TextRow field="Created" data={character.created} />
        </View>
      </View>
    );
  } else return <Spinner />;
}

export default FullCharacterCard;

const baseStyles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  image: {
    aspectRatio: 1,
    borderRadius: 20,
  },
  textBlock: {flex: 1, justifyContent: 'space-evenly'},
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  container: {...baseStyles.container, height: '90%'},
  image: {...baseStyles.image, marginBottom: 10},
});

const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    ...baseStyles.image,
    flex: 0.4,
    marginRight: 10,
  },
  textBlock: {...baseStyles.textBlock, height: '80%'},
});
