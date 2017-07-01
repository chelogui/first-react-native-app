import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.main}>
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

const css = {
  main: {
    backgroundColor:'#ebeef0',
    padding: 10,
    flex:1                //Step 2
  }
}

const styles = StyleSheet.create(css)

