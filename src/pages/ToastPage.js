import React, { Component } from 'react';
import { View as RNView } from 'react-native';
import { View, Toolbar, Button, Toast } from '../../frameui';

class ToastPage extends Component {
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
                <RNView style={{
                    backgroundColor: 'red',
                    height: 100,
                    borderBottomEndRadius: 16,
                    borderBottomRightRadius: 16,
                    borderEndColor: 'transparent',
                    borderBottomStartRadius: 16,
                    borderBottomLeftRadius: 16,

                }}>

                </RNView>
                <Button title={'show toast'} onPress={() => {
                    Toast.show('toast')
                }} />
            </View>
        );
    }
}

export default ToastPage;
