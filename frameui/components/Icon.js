import React from 'react';
import { View, StyleSheet, Image as RNImage } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { SvgXml } from 'react-native-svg';

const Icon = props => (
    <View style={[styles.container, {
        width: props.width ? props.width : props.size,
        height: props.height ? props.height : props.size,
    }, props.style]}>
        {props.source.source && <Image {...props} />}
        {props.source.name && <Feather {...props} />}
        {props.source.svg && <SVG {...props} />}
    </View>
);

const Image = props => {
    return (
        <RNImage style={{
            width: props.width ? props.width : props.size,
            height: props.height ? props.height : props.size,
        }} source={props.source.source} />
    )
}


const Feather = props => {
    return (
        <IconFeather name={props.source.name} size={props.size} color={props.color} />
    )
}

const SVG = props => {
    return (
        <SvgXml
            width={props.width ? props.width : props.size}
            height={props.height ? props.height : props.size}
            xml={props.source.svg} />
    )
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center' }
});
export default Icon;
