/**
 * @format
 */
import React from 'react';
import {AppRegistry, useColorScheme} from 'react-native';
import {App} from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import {Platform, Text} from 'react-native';

function Main() {
  opoFontFix();
  const colorScheme = useColorScheme();

  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
}

export const opoFontFix = () => {
  if (Platform.OS !== 'android') {
    return;
  }

  const oldRender = Text.render;
  Text.render = function (...args) {
    const origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [{fontFamily: 'Roboto'}, origin.props.style],
    });
  };
};

AppRegistry.registerComponent(appName, () => Main);
