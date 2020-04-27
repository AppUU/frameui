import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, getThemeValue, mapping, themeColor, Touchable, Icon, Text, Label } from '..';
import Divider from './Divider';

const Item = ({ theme = themeColor, size = 'large', title, subtitle, source, labelComponent, rightComponent, firstItem, lastItem, onPress }) => (
    <Layout theme={theme} style={[firstItem && { marginTop: 4 }, lastItem && { marginBottom: 4 }]}>
        {firstItem && <Divider theme={theme} />}
        <Touchable
            onPress={onPress}
            style={[{
                flexDirection: 'row',
                alignItems: 'center',
                height: getThemeValue('height', mapping['item'][size]),
                marginHorizontal: getThemeValue('marginHorizontal', mapping['item'][size]),
            }, !lastItem && {
                borderBottomColor: getThemeValue(`color-divider-divider`, theme),
                borderBottomWidth: getThemeValue(`divider`, mapping['divider'])
            }]}>
            {source &&
                <Icon
                    source={source}
                    size={getThemeValue('iconSize', mapping['item'][size])}
                    style={{ marginRight: getThemeValue('iconMarginRight', mapping['item'][size]) }}
                />}
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }} >
                <Text theme={theme} text={title}
                    fontWeight={getThemeValue('titleFontWeight', mapping['item'][size])}
                    fontSize={getThemeValue('titleFontSize', mapping['item'][size])}
                />
                <View style={{ marginLeft: 4, flexDirection: 'row' }}>
                    {labelComponent && labelComponent}
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }} >
                {rightComponent && rightComponent}
                <Text theme={theme} text={subtitle}
                    textColor={getThemeValue('color-item-subtitle', mapping['item'][size])}
                    fontSize={getThemeValue('subtitleFontSize', mapping['item'][size])} />
                {onPress && <Icon size={16} name={'chevron-right'} color={getThemeValue('color-item-arrowright', theme)} />}
            </View>
        </Touchable>
        {lastItem && <Divider theme={theme} />}
    </Layout>
);

export default Item;
