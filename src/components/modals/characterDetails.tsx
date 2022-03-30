import TextRow from '@components/textRow';
import useOrientation from '@hooks/useOrientation';
import Character from 'models/character';
import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';

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
    <Modal isShown={isShown} toggle={toggle} style={styles.modal}>
      <View style={styles.infoBlock}>
        <Image source={{uri: character.image}} style={styles.image} />
        <View style={styles.textBlock}>
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

const baseStyles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    borderRadius: 20,
  },
  textBlock: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

const portraitStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: Platform.select({ios: 0.65, android: 0.85}),
  },
  infoBlock: {flex: 1},
  image: {
    ...baseStyles.image,
    width: '100%',
  },
});

const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  modal: {
    flex: 0.62,
  },
  infoBlock: {
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    ...baseStyles.image,
    flex: Platform.select({ios: 0.45, android: 0.5}),
    marginRight: 15,
  },
  textBlock: {
    ...baseStyles.textBlock,
    height: "80%"
  }
});
