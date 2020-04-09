import React, { createContext, PureComponent } from 'react';
import Storage from './storage';

export const initialStore = {
    settings: {
        allowMobileNetwork: true,
    }
};

export const Store = createContext(initialStore);

export class StoreProvider extends PureComponent {

    state = {
        ...initialStore
    }
    //设置
    setSettings = (type, value) => {
        const _settings = Object.assign({}, this.state.settings, { [type]: value });
        this.setState({
            settings: _settings
        })
    }
    //设置初始化
    initSettings = (settings) => {
        this.setState({ settings: settings });
    }


    componentWillUnmount() {
        //应用关闭时保存设置
        const { settings } = this.state;
        Storage.save('settings', settings);
    }
    render() {
        const { settings } = this.state;
        return (
            <Store.Provider value={{
                settings: settings,
                initSettings: this.initSettings,
                setSettings: this.setSettings,
            }}>
                {this.props.children}
            </Store.Provider>
        )
    }
}