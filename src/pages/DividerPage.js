import React, { Component } from 'react';
import { View, Toolbar, Layout, Divider, Text } from '../../frameui';

class DividerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <Layout style={{ paddingVertical: 40 }}>
                    <Text text={'divider'} />
                    <Divider />
                    <Text text={'splitter'} />
                    <Divider shape={'splitter'} />
                </Layout>
                <Layout style={{ margin: 16, padding: 12 }}>
                    <Text text={'divider'} />
                    <Divider />
                    <Text text={'splitter'} />
                    <Divider shape={'splitter'} />
                </Layout>
            </View>
        );
    }
}

export default DividerPage;
