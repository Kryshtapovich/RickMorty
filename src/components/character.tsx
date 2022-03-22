import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Character} from '@models/character';

interface Props {
  character: Character;
}

function CharacterCard({character}: Props) {
  const {width, height} = Dimensions.get('window');

  const textRow = (field: string, data: string) => (
    <View style={styles.textRow}>
      <Text style={styles.field}>{`${field}:`}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={{uri: character.image}} style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
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
    color: 'black',
    fontSize: 18,
    marginRight: 20,
  },
  data: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});
