import { StyleSheet, Platform } from 'react-native';

module.exports = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex:1
  },
  status: {
   backgroundColor: "#5e8d48"
  },
  headerStyle: {
    backgroundColor: 'white'
  },
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: "white",
  }
});
