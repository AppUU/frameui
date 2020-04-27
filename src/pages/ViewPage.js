import React, { Component } from 'react';
import { View as RNView } from 'react-native';
import { View, Toolbar, Text, Layout } from '../../frameui';

class ViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Toolbar title={this.props.title} onPress={() => this.props.navigator.pop()} />
                <RNView style={{ height: 100, flexDirection: 'row' }}>
                    <Layout flex={1} center style={{ margin: 4 }}>
                        <Text text={'Layout flex:1'} />

                    </Layout>
                    <Layout flex={1} center style={{ margin: 4 }}>
                        <Text text={'Layout flex:1'} />
                    </Layout>
                </RNView>
                <RNView style={{ height: 100, flexDirection: 'row' }}>
                    <Layout flex={1} center style={{ margin: 4 }}>
                        <Text text={'Layout flex:1'} />

                    </Layout>
                    <Layout flex={2} center style={{ margin: 4 }}>
                        <Text text={'Layout flex:2'} />
                    </Layout>
                </RNView>
                <RNView style={{ height: 100, flexDirection: 'row' }}>
                    <Layout flex={2} center style={{ margin: 4 }}>
                        <Text text={'Layout flex:2'} />

                    </Layout>
                    <Layout flex={1} center style={{ margin: 4 }}>
                        <Text text={'Layout flex:1'} />
                    </Layout>
                </RNView>
            </View>
        );
    }
}

export default ViewPage;
