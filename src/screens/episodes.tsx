import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function EpisodesScreen() {
  return (
    <View style={styles.container}>
      <Text>Episodes</Text>
    </View>
  );
}

export default EpisodesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
