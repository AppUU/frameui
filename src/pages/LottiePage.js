import React, { Component } from 'react';
import { View, Toolbar } from '../../frameui';
import LottieView from 'lottie-react-native';

class LottiePage extends Component {
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
                <LottieView source={require('./source/lottie.json')} autoPlay loop />
            </View>
        );
    }
}

export default LottiePage;
