import App from '@src/App';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';
import {name} from './app.json';
import store from '@src/redux/store';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(name, () => RNRedux);
