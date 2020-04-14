import React from 'react';
import { Text as RNText } from 'react-native';
import { _ANDROID_, getThemeValue, mScaleText } from '../';

const Text = ({ theme, textColor = 'normal', fontSize = 'normal', text, lines = 1 }) => (
    <RNText
        numberOfLines={lines}
        adjustsFontSizeToFit={true}
        style={[
            {
                fontSize: mScaleText(getThemeValue(`fontSize-${fontSize}`, theme)),
                fontWeight: getThemeValue(`fontWeight-${fontSize}`, theme),
                color: getThemeValue(`textColor-${textColor}`, theme),
                textAlignVertical: 'center',
            },
            lines != 1 && { lineHeight: mScaleText(getThemeValue(`fontSize-${size}`, theme) * 1.5) },
            _ANDROID_ && { includeFontPadding: false, }
        ]}
    >
        {text}
    </RNText >
);

export default Text;
