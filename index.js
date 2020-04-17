/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StoreProvider } from './src/util/store';
import App from './App';
import { name as appName } from './app.json';
import Storage from './src/util/storage';

export default class MobxRoot extends Component {

    state = { theme: require('./theme2.json') }

    setTheme = (theme) => {
        this.setState({ theme });
        Storage.save('theme', { theme });
    }

    render() {
        const { theme } = this.state
        return (
            <StoreProvider>
                <App theme={theme} setTheme={this.setTheme} />
            </StoreProvider>
        )
    }
}


AppRegistry.registerComponent(appName, () => MobxRoot);
