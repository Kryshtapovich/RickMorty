import useOrientation from '@hooks/useOrientation';
import {Character} from '@models/character';
import React from 'react';
import * as RN from 'react-native';

interface Props {
  residents: Array<Character>;
  isShown: boolean;
  toggle: () => void;
}

function LocationModal(props: Props) {
  const {residents, isShown, toggle} = props;

  const {isPortrait} = useOrientation();
  const modalStyle = isPortrait ? portraitStyles : landscapelStyles;

  const getHeight = () => {
    const multiplier = residents.length % 10;
    if (isPortrait) return {height: multiplier > 4 ? 270 : multiplier * 90};
    else return {height: multiplier > 4 ? 180 : multiplier * 90};
  };

  return (
    <RN.Modal
      transparent
      animationType="slide"
      visible={isShown}
      onRequestClose={toggle}
      supportedOrientations={['portrait', 'landscape']}>
      <RN.View style={modalStyle.container}>
        <RN.View style={modalStyle.content}>
          <RN.Text style={modalStyle.listHeader}>Residents</RN.Text>
          <RN.ScrollView style={[modalStyle.list, getHeight()]}>
            {residents.map(({id, name, image}) => (
              <RN.View key={id} style={modalStyle.character}>
                <RN.Image source={{uri: image}} style={modalStyle.image} />
                <RN.Text style={modalStyle.text}>{name}</RN.Text>
              </RN.View>
            ))}
          </RN.ScrollView>
          <RN.Pressable style={modalStyle.closeButton} onPress={toggle}>
            <RN.Text style={modalStyle.closeText}>Close</RN.Text>
          </RN.Pressable>
        </RN.View>
      </RN.View>
    </RN.Modal>
  );
}

export default LocationModal;

const portraitStyles = RN.StyleSheet.create({
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
    backgroundColor: 'white',
  },
  listHeader: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    height: 270,
  },
  character: {
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 50,
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
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

const landscapelStyles = RN.StyleSheet.create({
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
    backgroundColor: 'white',
  },
  character: {
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    height: 100,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
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
