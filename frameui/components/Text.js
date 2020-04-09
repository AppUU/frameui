import React from 'react';
import { Text as RNText } from 'react-native';
import { getThemeValue } from '../';

const Text = ({ theme, color = 'normal', size = 'M', text }) => (
    <RNText style={{
        fontSize: getThemeValue(`fontSize-${size}`, theme),
        color: getThemeValue(`textColor-${color}`, theme)
    }}>
        {text}
    </RNText>
);

export default Text;
