import React, {Component} from 'react';
import s from '../styles/layout';
import {View, Text, StyleSheet, Platform} from 'react-native';

export default class StatusBarBackground extends Component{
  render(){
    return(
      <View style={[s.statusBarBackground, this.props.style || {}]}>
      </View>
    );
  }
}
