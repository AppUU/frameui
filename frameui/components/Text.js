import React from 'react';
import { Text as RNText } from 'react-native';
import { getThemeValue } from '../';

const Text = ({ theme, color, text }) => (
    <RNText style={{ color: getThemeValue(color, theme) }}>
        {text}
    </RNText>
);

export default Text;
