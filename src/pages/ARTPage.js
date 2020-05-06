import React, { Component } from 'react';
import { ART } from 'react-native';
const {
    Surface,
    Shape,
    Group,
    Text,
    Path,
    ClippingRectangle,
    LinearGradient, Stop,
    RadialGradient,
    Pattern,
    Transform
} = ART
import { View, Toolbar, width } from '../../frameui';

class ARTPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, navigator } = this.props
        // let colors = ['#3095ef', '#3095ef'];
        // let ll = new LinearGradient(colors, 0, 0, 0, 99);
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <Surface width={width} height={100}>
                    <Shape fill={'#3095ef'} d={`M${width},94.18h0a3023.21,3023.21,0,0,1-${width},0H0V0H375Z`} strokeWidth={1} />
                </Surface>

                <Surface width={60} height={18}>
                    <Shape fill={'#3095ef'} d={`M51.29,18H1.54A1.53,1.53,0,0,1,.12,15.88L6,1.83A3,3,0,0,1,8.71,0H58.46a1.53,1.53,0,0,1,1.42,2.12L54,16.17A3,3,0,0,1,51.29,18Z`} strokeWidth={1} />
                </Surface>
            </View>
        );
    }
}

export default ARTPage;
