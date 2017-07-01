import React, { Component } from 'react';
import Head from './shared/Header.js';
import Main from './shared/Main.js';
import { SideMenu, List, ListItem } from 'react-native-elements';

import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  onSideMenuChange (isOpen: boolean) {
    this.setState({
      isOpen: isOpen
    })
  }

  toggleSideMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }


  render() {

    const list = [ 
      { avatar_url: "asdf", name: "Marcelo 1", subtitle: "gomes marints" },
      { avatar_url: "asdf", name: "Marcelo 2", subtitle: "gomes marints" },
      { avatar_url: "asdf", name: "Marcelo 3", subtitle: "gomes marints" },
      { avatar_url: "asdf", name: "Marcelo 4", subtitle: "gomes marints" },
      { avatar_url: "asdf", name: "Marcelo 5", subtitle: "gomes marints" }
    ]
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              onPress={() => console.log('Pressed')}
              avatar={l.avatar_url}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
        </List>
      </View>
    )


    return (
      <View style={styles.mainContainer}>
        <SideMenu
          isOpen={this.state.isOpen}
          onChange={this.onSideMenuChange.bind(this)}
          menu={MenuComponent}>
          <Head toggleSideMenu={this.toggleSideMenu.bind(this)} />
          <Main />
        </SideMenu>


      </View>
    );
  }
}
const css = {
  mainContainer: {
    flex:1
  }
}

const styles = StyleSheet.create(css)

