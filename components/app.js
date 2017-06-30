import React, { Component } from 'react';
import Header from './shared/Header.js';
import Main from './shared/Main.js';

import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header />
        <Main />
      </View>
    );
  }
}
const css = {
  mainContainer: {
    flex:1
  }
}

const styles = StyleSheet.create(css)

