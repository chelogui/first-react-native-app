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
        <Text style={styles.toolbarTitle}>Achieve Languages</Text>
        <Text style={styles.toolbarButton}>like</Text>
      </View>
    )
  }
}


const css = {
  toolbar:{
    backgroundColor:'#fff',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'    //step 1
  },
  toolbarButton:{
    width: 50,            //step 2
    color:'#000',
    textAlign:'center'
  },
  toolbarTitle:{
    color:'#000',
    textAlign:'center',
    fontWeight:'bold',
    flex:1                //step 3
  }
}

const styles = StyleSheet.create(css)
