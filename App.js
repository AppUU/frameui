/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import TextBody from './frameui/TextBody';
import { stylesJson, darkJson } from './frameui';
import ceshi from './ceshi.json';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      defaultStyle: stylesJson
    }
  }

  render() {
    const { index, defaultStyle } = this.state
    return (
      <View style={styles.container}>
        <View>
          <TextBody color={'color'} theme={defaultStyle} />
          <TextBody color={'color1'} theme={defaultStyle} />
        </View>
        <View>
          <TextBody color={'color'} theme={defaultStyle} />
          <TextBody color={'color1'} theme={defaultStyle} />
        </View>
        <Button title={'切换'} onPress={this._onPress} />
      </View>
    );
  }

  _onPress = () => {
    const { index, defaultStyle } = this.state
    if (index == 0) {
      this.setState({
        index: 1,
        defaultStyle: darkJson
      })
    } else if (index == 1) {
      this.setState({
        index: 0,
        defaultStyle: ceshi
      })
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
