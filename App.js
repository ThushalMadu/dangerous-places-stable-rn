/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Provider } from 'react-redux';
import AppView from './src/modules/AppContainer';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

