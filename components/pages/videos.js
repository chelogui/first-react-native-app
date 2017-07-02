import React, { Component } from 'react';
import MyStatusBar from '../shared/MyStatusBar';
import s from '../styles/layout';
import {
  Text,
  StyleSheet,
  Button,
  View
} from 'react-native';

export default class Videos extends Component {

  static navigationOptions = {
    headerRight: <Button title="Info" />,
    title: "Videos page",
    drawerLabel: 'Videos'
  };

  render() {
    return (
      <View style={s.main}>
        <MyStatusBar />
        <Text>Videos page</Text>
      </View>
    )
  }
}
