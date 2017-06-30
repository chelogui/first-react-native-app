import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.toolbarButton}>add</Text>
        <Text style={styles.toolbarTitle}>center</Text>
        <Text style={styles.toolbarButton}>like</Text>
      </View>
    )
  }
}


const css = {
  toolbar:{
    backgroundColor:'#81c04d',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'    //step 1
  },
  toolbarButton:{
    width: 50,            //step 2
    color:'#fff',
    textAlign:'center'
  },
  toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1                //step 3
  }
}

const styles = StyleSheet.create(css)
