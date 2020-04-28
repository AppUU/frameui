/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, BackHandler } from 'react-native';
import { Navigator } from "react-native-deprecated-custom-components";
import Router from './src/router';
console.disableYellowBox = true;
export default class App extends PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        initialRoute={{ id: 'Main' }}
        configureScene={this._configureScene}
        renderScene={this._renderScene.bind(this)}
        style={{ flex: 1 }} />
    );
  }

  _configureScene = route => {
    if (route.sceneConfig) return route.sceneConfig;
    return {
      ...Navigator.SceneConfigs.PushFromRight,
      // gestures: {} //屏蔽右滑
    };
  };

  _renderScene(route, navigator) {
    let Component = Router[route.id].default
    return <Component {...this.props} {...route.params} navigator={navigator} />;
  }

  componentDidMount() { this._addBackHandlerListener() }
  componentWillUnmount() { this._removeBackHandlerListener() }
  _addBackHandlerListener() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', () => {
        if (!this.refs.navigator) return false;
        const routers = this.refs.navigator.getCurrentRoutes();
        if (routers.length > 1) {
          this.refs.navigator.pop();
          return true;
        } else {
          this.refs.navigator.pop();
          return false;
        }
      })
    }
  }

  _removeBackHandlerListener() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

}
