import React from 'react';
import { View, TextInput as RNTextInput } from 'react-native';

const TextInput = ({
    children, style, ...rest
}) => (
        <View style={style}>
            {children}
        </View>
    );

export default TextInput;
