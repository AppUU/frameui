import React, { Component } from 'react';
import { View as RNView } from 'react-native';
import { View, Toolbar, Label, Layout } from '../../frameui';

class LabelPage extends Component {
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
                <Layout row center style={{ padding: 12 }}>
                    <Label text={'标签'} />
                    <Label text={'标签'} status={'success'} />
                    <Label text={'label'} />
                    <Label text={'label'} status={'success'} />
                </Layout>
            </View>
        );
    }
}

export default LabelPage;
