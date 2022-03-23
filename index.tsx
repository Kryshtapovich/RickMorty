import App from '@src/app';
import store from '@store';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import {name} from './app.json';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(name, () => RNRedux);
