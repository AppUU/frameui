import React from 'react';
import { TouchableOpacity } from 'react-native';

const Touchable = (props) => (
    <TouchableOpacity activeOpacity={.9} disabled={!props.onPress}  {...props}>
        {props.children}
    </TouchableOpacity>
);

export default Touchable;
