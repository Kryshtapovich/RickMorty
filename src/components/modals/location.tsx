import TextRow from '@components/textRow';
import useOrientation from '@hooks/useOrientation';
import {Location} from '@models/location';
import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  location: Location;
  isShown: boolean;
  toggle: () => void;
}

function LocationModal(props: Props) {
  const {location, isShown, toggle} = props;

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
            <View>
              <TextRow field="Type" data={location.type} />
              <TextRow field="Dimension" data={location.dimension} />
              <TextRow field="Created" data={location.created} />
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

export default LocationModal;

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
    backgroundColor: 'white',
  },
  infoBlock: {
    flexDirection: 'row',
    marginBottom: 10,
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
