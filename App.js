/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Navigator } from "react-native-deprecated-custom-components";
import Router from './src/router';

export default class App extends PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        initialRoute={{ id: 'TextPage' }}
        configureScene={this._configureScene}
        renderScene={this._renderScene.bind(this)}
        style={{ flex: 1 }} />
    );
  }

  _configureScene = route => {
    if (route.sceneConfig) return route.sceneConfig;
    return {
      ...Navigator.SceneConfigs.PushFromRight,
      gestures: {} //屏蔽右滑
    };
  };

  _renderScene(route, navigator) {
    let Component = Router[route.id].default
    return <Component {...this.props} {...route.params} navigator={navigator} />;
  }
}
