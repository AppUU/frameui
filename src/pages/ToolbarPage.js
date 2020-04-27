import React, { Component } from 'react';
import { View, Toolbar } from '../../frameui';

class ToolbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, navigator } = this.props
        return (
            <View>
                <Toolbar title={'标题(light)'} subtitle={'副标题'} onPress={() => navigator.pop()} />
                <Toolbar barStyle={'dark'} title={'标题(dark)'} subtitle={'副标题'} onPress={() => navigator.pop()} />
            </View>
        );
    }
}

export default ToolbarPage;
