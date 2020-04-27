import React from 'react';
import { View, StyleSheet, Image as RNImage } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const Icon = props => (
    <View style={[styles.container, { width: props.size, height: props.size }, props.style]}>
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

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center' }
});
export default Icon;
