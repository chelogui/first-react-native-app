import React, { Component } from 'react';
import Header from './shared/Header.js';
import Main from './shared/Main.js';

import {
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Main />
      </View>
    );
  }
}
