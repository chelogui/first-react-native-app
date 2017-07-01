import React, { Component } from 'react';
import { Header, Icon, Button } from 'react-native-elements';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class Head extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleSideMenu();
  }

  render() {
    return (
      <View style={styles.toolbar}>
        <Button
          icon={{name: 'dehaze'}}
          backgroundColor='#397af8'
          onPress={this.handleClick}
          textStyle={styles.test}
          style={styles.toolbarButton}
        />
        <Text style={styles.toolbarTitle}>Achieve Languages</Text>
        <Button
          icon={{name: 'dehaze'}}
          backgroundColor='#397af8'
          style={styles.toolbarButton}
        />
      </View>
    )
  }
}


const css = {
  toolbar:{
    backgroundColor:'#fff',
    marginTop:30,
    flexDirection:'row'    //step 1
  },
  test: {
    color: 'red'
  },
  toolbarButton:{
  },
  toolbarTitle:{
    color:'#000',
    textAlign:'center',
    fontWeight:'bold',
    flex:1                //step 3
  }
}

const styles = StyleSheet.create(css)
