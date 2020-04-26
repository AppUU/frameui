import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, getThemeValue, mapping, themeColor, Touchable, Icon, Text, Label } from '..';
import Divider from './Divider';

const Item = ({ theme = themeColor, source, labelComponent, rightComponent, firstItem, lastItem }) => (
    <Layout theme={theme}>
        {firstItem && <Divider theme={theme} />}
        <Touchable style={[{
            flexDirection: 'row',
            alignItems: 'center',
            height: getThemeValue('height', mapping['item']),
            marginHorizontal: getThemeValue('marginHorizontal', mapping['item']),
        },
        !lastItem && {
            borderBottomColor: getThemeValue(`color-divider-divider`, theme),
            borderBottomWidth: getThemeValue(`divider`, mapping['divider'])
        }]}>
            <Icon
                source={source}
                size={getThemeValue('iconSize', mapping['item'])}
                style={{ marginRight: getThemeValue('iconMarginRight', mapping['item']) }}
            />
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }} >
                <Text theme={theme} text={'标题'}
                    fontWeight={getThemeValue('titleFontWeight', mapping['item'])}
                    fontSize={getThemeValue('titleFontSize', mapping['item'])}
                />
                {labelComponent && labelComponent}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }} >
                {rightComponent && rightComponent}
                <Text theme={theme} text={'次标题'}
                    textColor={'subtitle'}
                    fontSize={getThemeValue('subtitleFontSize', mapping['item'])} />
                <Icon
                    name={'chevron-right'} color={getThemeValue('color-arrow-right', theme)}
                    size={20}
                />
            </View>
        </Touchable>
        {lastItem && <Divider theme={theme} />}
    </Layout>
);

const styles = StyleSheet.create({
    container: {

    }
});

export default Item;
