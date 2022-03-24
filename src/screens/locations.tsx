import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function LocationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Locations</Text>
    </View>
  );
}

export default LocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
