import React from 'react';
import { TouchableOpacity, Text as RNText } from 'react-native';
import { getThemeValue } from '../styles/styles.service';

const Button = ({ theme, color }) => (
    <RNText style={{ color: getThemeValue(color, theme) }}>
        {'123'}
    </RNText>
);

export default Button;
