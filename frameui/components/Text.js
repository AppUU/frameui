import React from 'react';
import { Text as RNText } from 'react-native';
import { _ANDROID_, getThemeValue, mScaleText, mapping, themeColor } from '../';

const Text = ({
    theme = themeColor, adjustsFontSizeToFit = false,
    textColor = 'color-text-color', fontSize = 'fontSize-medium', fontWeight,
    text, lines = 1, style
}) => (
        <RNText
            numberOfLines={lines}
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            style={[
                {
                    fontSize: mScaleText(getThemeValue(fontSize, mapping)),
                    fontWeight: fontWeight,
                    color: getThemeValue(textColor, theme),
                    textAlignVertical: 'center',
                },
                lines != 1 && { lineHeight: mScaleText(getThemeValue(fontSize, mapping) * 1.5) },
                _ANDROID_ && { includeFontPadding: false, },
                style
            ]}
        >
            {text}
        </RNText >
    );

export default Text;
