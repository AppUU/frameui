import React, { Component } from 'react';
import { View, Toolbar, Icon, Text } from '../../frameui';

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
                <Icon source={{ name: 'feather' }} color={'#6435c9'} size={20} />
                {/* <Icon color={'#6435c9'} size={20} /> */}
                {/* <Icon color={'#6435c9'} size={20} /> */}
                <Text
                    textColor={'t1'}
                    lines={0}
                    text={`
                    source={{name:'',source:'',svg:''}}
                    `}
                />
            </View>
        );
    }
}

export default IconPage;
