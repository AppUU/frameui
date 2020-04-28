import React, { Component } from 'react';
import { View, Layout, Text, Toolbar, Button, List, Item } from '../../frameui';
import Tooltip from '../../frameui/components/Tooltip';

class TextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { theme, title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <Text theme={theme} text={'normal'} />
                <Text theme={theme} fontSize={'small'} textColor={'primary'} text={'primary-small'} />
                <Text theme={theme} fontSize={'large'} textColor={'success'} text={'success-large'} />
                <Text theme={theme} fontSize={'giant'} textColor={'normal'} text={'normal-giant'} />
            </View>

        );
    }
}

export default TextPage;
