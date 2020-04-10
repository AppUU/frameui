import React from 'react';
import { Text as RNText } from 'react-native';
import { _ANDROID_, getThemeValue } from '../';

const Text = ({ theme, color = 'normal', size = 'medium', text, lines = 1 }) => (
    <RNText
        numberOfLines={lines}
        adjustsFontSizeToFit={true}
        style={[
            {
                fontSize: getThemeValue(`fontSize-${size}`, theme),
                color: getThemeValue(`textColor-${color}`, theme),
                // fontWeight: '500',
                textAlignVertical: 'center'
            },
            lines != 1 && { lineHeight: getThemeValue(`fontSize-${size}`, theme) * 1.5 },
            _ANDROID_ && { includeFontPadding: false, }
        ]}
    >
        {text}
    </RNText>
);

export default Text;
