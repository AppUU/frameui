import React, { Component } from 'react';
import { View, Toolbar, TextInput } from '../../frameui';
import tzggSvg from '../svg/tzgg.svg';

class TextInputPage extends Component {
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
                <TextInput placeholder={'写点啥呢'} leftSource={{ svg: tzggSvg }} />
                <TextInput placeholder={'写点啥呢'} />
                <TextInput placeholder={'写点啥呢'} disabled={true} />
            </View>
        );
    }
}

export default TextInputPage;
