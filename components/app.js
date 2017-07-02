import React, { Component } from 'react';
import Home from './pages/home';
import Videos from './pages/videos';
import { AppRegistry } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import {
  Text,
  StyleSheet,
  View
} from 'react-native';

const Draw = DrawerNavigator({
  Home: { screen: Home, },
  Videos: { screen: Videos, }
});

const App = StackNavigator({
  App: {
    screen: Draw
  }
});

AppRegistry.registerComponent('reactAchieve', () => App);
