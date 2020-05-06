import React from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import { getThemeValue, themeColor } from '..';

const TextInput = props => (
    <View style={props.style}>
        <RNTextInput {...props} style={{ flex: 1 }} />
    </View>
);

export default TextInput;
