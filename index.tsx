import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {offsetLimitPagination} from '@apollo/client/utilities';
import {ScrollProvider} from '@context/scroll';
import Navigation from '@navigation';
import React from 'react';
import {AppRegistry} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {name} from './app.json';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

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
