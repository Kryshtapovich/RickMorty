import useOrientation from '@hooks/useOrientation';
import {Character} from '@models/character';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  character: Character;
  reduced?: boolean;
}

function CharacterCard(props: Props) {
  const {character, reduced} = props;
  const {width, height} = useOrientation();

  const flex = width < height ? 0.4 : 0.2;

  const textRow = (field: string, data: string) => (
    <View style={styles.textRow}>
      <Text style={styles.field}>{`${field}:`}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );

  return reduced ? (
    <View style={reducedStyles.container}>
      <Image source={{uri: character.image}} style={reducedStyles.image} />
      <Text style={reducedStyles.text}>{character.name}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Image source={{uri: character.image}} style={{...styles.image, flex}} />
      <View style={styles.rightBlock}>
        {textRow('Name', character.name)}
        {textRow('Status', character.status)}
        {textRow('Species', character.species)}
        {textRow('Gender', character.gender)}
      </View>
    </View>
  );
}

export default CharacterCard;

const reducedStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 12,
    borderRadius: 20,
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 15,
    backgroundColor: 'gray',
  },
  image: {
    flex: 0.4,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 12,
  },
  rightBlock: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  field: {
    fontSize: 18,
    marginRight: 20,
  },
  data: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
