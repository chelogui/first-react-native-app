import React, { Component } from 'react';
import MyStatusBar from '../shared/MyStatusBar';
import s from '../styles/layout';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Button
} from 'react-native';

export default class Home extends Component {

  constructor() {
    super();
  }

  static navigationOptions = {
    title: "Home page",
    drawerLabel: 'Home'
  };


  handleClick() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={s.main}>
        <MyStatusBar />

        <Button onPress={this.handleClick.bind(this)} title="Open menu" />
      </View>
    )
  }
}
