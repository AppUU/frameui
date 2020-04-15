import React from 'react';
import { View } from 'react-native';
import { getThemeValue } from '..';

/**
 * 分割线divider
 * 分割条splitter
 * @param {*} param0 
 */
const Divider = ({ theme, shape = 'divider', style }) => (
    <View style={[{
        backgroundColor: getThemeValue(`color-${shape}`, theme),
        height: getThemeValue(`height-${shape}`, theme)
    }, style]}>
    </View>
);

export default Divider;
