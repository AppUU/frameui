import React from 'react';
import { View as RNView } from 'react-native';
import { getThemeValue, mapping, themeColor } from '..';
import ImageProgress from 'react-native-image-progress';

const Avatar = ({ url, size = 'medium', shape = 'round', theme = themeColor }) => (
    <RNView>
        <ImageProgress
            source={{ uri: url }}
            borderRadius={getThemeValue(`borderRadius-${shape}`, mapping['avatar'][size])}
            style={[{
                width: getThemeValue('width', mapping['avatar'][size]),
                height: getThemeValue('height', mapping['avatar'][size]),
                borderRadius: getThemeValue(`borderRadius-${shape}`, mapping['avatar'][size]),
                borderWidth: getThemeValue(`borderWidth`, mapping['avatar'][size]),
                borderColor: getThemeValue(`color-avatar-border`, theme),
                backgroundColor: getThemeValue(`color-avatar`, theme),
            }]} />
    </RNView>
);

export default Avatar;
