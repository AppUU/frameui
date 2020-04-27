import React, { Component } from 'react';
import { View, Toolbar, Icon } from '../../frameui';

class IconPage extends Component {
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
                <Icon name={'feather'} color={'#6435c9'} size={20} />
            </View>
        );
    }
}

export default IconPage;
