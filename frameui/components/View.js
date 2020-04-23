import React from 'react';
import { View as RNView, StyleSheet } from 'react-native';
import { getThemeValue, themeColor } from '..';

/**
 * 主视图
 * @param {*} param0 
 */
const View = ({ theme = themeColor, children, style }) => (
    <RNView style={[
        {
            flex: 1,
            backgroundColor: getThemeValue('color-view-background', theme),
        }, style]}>
        {children}
    </RNView>
);
const styles = StyleSheet.create({

});
export default View;
