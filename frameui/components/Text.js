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
                    color: isReferenceKey(textColor) ? textColor : getThemeValue(textColor, theme),
                    // textAlign: 'center',
                    // backgroundColor: 'red',
                },
                lines != 1 && { lineHeight: mScaleText(getThemeValue(fontSize, mapping) * 1.5) },
                lines == 1 && { lineHeight: mScaleText(getThemeValue(fontSize, mapping) * 1.2) },
                _ANDROID_ && { textAlignVertical: 'center', includeFontPadding: false, },
                style
            ]}
        >
            {text}
        </RNText >
    );

/**
 * 判断传入的是否为颜色
 * @param {*} value 
 */
function isReferenceKey(value) {
    return `${value}`.startsWith('#') ||
        `${value}`.startsWith('rgb') ||
        `${value}`.startsWith('rgba');
}

export default Text;
