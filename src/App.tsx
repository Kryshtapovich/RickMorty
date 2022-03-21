import * as LIB from 'react-native/Libraries/NewAppScreen';
import * as RN from 'react-native';

import React from 'react';
import Section from '@src/components/Section';

function App() {
  const isDarkMode = RN.useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? LIB.Colors.darker : LIB.Colors.lighter,
  };

  return (
    <RN.SafeAreaView style={backgroundStyle}>
      <RN.StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RN.ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <LIB.Header />
        <RN.View
          style={{
            backgroundColor: isDarkMode ? LIB.Colors.black : LIB.Colors.white,
          }}>
          <Section title="Step One">
            Edit <RN.Text style={styles.highlight}>App.js</RN.Text> to change
            this screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <LIB.ReloadInstructions />
          </Section>
          <Section title="Debug">
            <LIB.DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LIB.LearnMoreLinks />
        </RN.View>
      </RN.ScrollView>
    </RN.SafeAreaView>
  );
}

export default App;

const styles = RN.StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
