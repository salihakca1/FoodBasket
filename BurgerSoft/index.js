import React from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/store'; // Redux store'unuzun olduğu yere giden doğru yolu belirtin
import Router from './src/Router';
import { name as appName } from './app.json';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);