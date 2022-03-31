import {ApolloProvider} from '@apollo/client';
import {ScrollProvider} from '@context/scroll';
import Navigation from '@navigation';
import {client} from '@services';
import React from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {name} from './app.json';

const App = () => (
  <ApolloProvider client={client}>
    <ScrollProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ScrollProvider>
  </ApolloProvider>
);

AppRegistry.registerComponent(name, () => App);
