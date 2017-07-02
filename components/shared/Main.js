import React, { Component } from 'react';
import s from '../styles/layout';
import { Button } from 'react-native-elements';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={s.main}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <Button
          icon={{name: 'home', size: 14 }}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`ok`}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create(css)

