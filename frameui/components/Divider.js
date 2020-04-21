import React from 'react';
import { View } from 'react-native';
import { getThemeValue, mapping, themeColor } from '..';

/**
 * 分割线divider
 * 分割条splitter
 * @param {*} param0 
 */
const Divider = ({ theme = themeColor, shape = 'divider', style }) => (
    <View style={[{
        backgroundColor: getThemeValue(`color-divider-${shape}`, theme),
        height: getThemeValue(`${shape}`, mapping['divider'])
    }, style]}>
    </View>
);

export default Divider;
