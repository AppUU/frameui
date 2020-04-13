import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getThemeValue } from '..';
/**
 * 
 * @param {主题-json格式} theme 
 * @param {颜色，例:primary} color 
 * @param {*} flex 
 */
const Layout = ({ theme, color, flex, center, centerVertical, centerHorizontal, row, children, style }) => (
    <View style={[
        { backgroundColor: '#fff' },
        theme && color && { backgroundColor: getThemeValue(`backgroundColor-${color}`, theme) },
        flex && { flex: flex },
        center && styles.center,
        centerVertical && (row ? styles.centerHorizontal : styles.centerVertical),
        centerHorizontal && (row ? styles.centerVertical : styles.centerHorizontal),
        row && styles.row,
        style
    ]}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    center: { alignItems: 'center', justifyContent: 'center' },
    centerVertical: { justifyContent: 'center' },
    centerHorizontal: { alignItems: 'center' },
    row: { flexDirection: 'row' }

});

export default Layout;