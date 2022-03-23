import TextRow from '@components/textRow';
import useOrientation from '@hooks/useOrientation';
import {Character} from '@models/character';
import React from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  character: Character;
  isShown: boolean;
  toggle: () => void;
}

function CharacterModal(props: Props) {
  const {character, isShown, toggle} = props;

  const {isPortrait} = useOrientation();
  const modalStyle = isPortrait ? portraitStyles : landscapelStyles;

  return (
    <Modal
      transparent
      animationType="slide"
      visible={isShown}
      onRequestClose={toggle}
      supportedOrientations={['portrait', 'landscape']}>
      <View style={modalStyle.container}>
        <View style={modalStyle.content}>
          <View style={modalStyle.infoBlock}>
            <Image source={{uri: character.image}} style={modalStyle.image} />
            <View>
              <TextRow field="Name" data={character.name} />
              <TextRow field="Status" data={character.status} />
              <TextRow field="Gender" data={character.gender} />
              <TextRow field="Origin" data={character.origin?.name} />
              <TextRow field="Created" data={character.created} />
            </View>
          </View>
          <Pressable style={modalStyle.closeButton} onPress={toggle}>
            <Text style={modalStyle.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default CharacterModal;

const portraitStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '91%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  infoBlock: {},
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 15,
  },
  closeButton: {
    width: '100%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#2196F3',
  },
  closeText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const landscapelStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '60%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  infoBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    marginRight: 15,
    borderRadius: 20,
  },
  closeButton: {
    width: '100%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#2196F3',
  },
  closeText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
