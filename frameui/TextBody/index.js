import React from 'react';
import { Text } from 'react-native';
import { getThemeValue } from '../styles/styles.service';

const TextBody = ({ theme, color }) => (
    <Text style={{ color: getThemeValue(color, theme) }}>
        {'123'}
    </Text>
);

export default TextBody;
