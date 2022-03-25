import TextRow from '@components/textRow';
import useOrientation from '@hooks/useOrientation';
import Character from '@models/character';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Modal from '.';

interface Props {
  character: Character;
  isShown: boolean;
  toggle: () => void;
}

function CharacterDetailsModal(props: Props) {
  const {character, isShown, toggle} = props;

  const {isPortrait} = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapeStyles;

  return (
    <Modal isShown={isShown} toggle={toggle}>
      <View style={styles.infoBlock}>
        <Image source={{uri: character.image}} style={styles.image} />
        <View style={{flex: 1}}>
          <TextRow field="Status" data={character.status} />
          <TextRow field="Gender" data={character.gender} />
          <TextRow field="Origin" data={character.origin?.name} />
          <TextRow field="Created" data={character.created} />
        </View>
      </View>
    </Modal>
  );
}

export default CharacterDetailsModal;

const portraitStyles = StyleSheet.create({
  infoBlock: {flex: 1},
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 15,
  },
});

const landscapeStyles = StyleSheet.create({
  infoBlock: {
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '35%',
    aspectRatio: 1,
    marginRight: 15,
    borderRadius: 20,
  },
});
