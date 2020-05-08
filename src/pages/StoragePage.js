import React, { Component } from 'react';
import { View, Toolbar, Layout, Button, Storage, Text } from '../../frameui';

class StoragePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataValue: {}
        };
    }

    render() {
        const { title, navigator } = this.props
        const { dataValue } = this.state
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <Layout row>
                    <Button title={'保存'} onPress={this.onSavePress} />
                    <Button title={'查看'} onPress={this.getStorage} />
                    <Button title={'移除'} />
                </Layout>
                <Text text={JSON.stringify(dataValue)} />
            </View>
        );
    }

    onSavePress = () => {
        let data = { name: '123' }
        Storage.save('data', data)
    }

    getStorage = () => {
        Storage.get('data').then(dataValue => {
            dataValue && this.setState({ dataValue })
        })
    }
}

export default StoragePage;
