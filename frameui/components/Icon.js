import React from 'react';
import { View, Image as RNImage } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const Icon = props => (
    <View style={props.style}>
        {props.source && <Image {...props} />}
        {props.name && <Feather {...props} />}
    </View>
);

const Image = props => {
    return (
        <RNImage style={{ width: props.size, height: props.size }} source={props.source} />
    )
}


const Feather = props => {
    return (
        <IconFeather name={props.name} size={props.size} color={props.color} />
    )
}

export default Icon;
