import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, getThemeValue, mapping, themeColor, Touchable, Icon, Text } from '..';
import Divider from './Divider';

const Item = ({ theme = themeColor, firstItem, lastItem }) => (
    <Layout theme={theme}>
        {firstItem && <Divider theme={theme} />}
        <Touchable style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: getThemeValue('height', mapping['item']),
            marginHorizontal: getThemeValue('marginHorizontal', mapping['item']),
        }}>
            <Icon
                name={'x'} color={'red'}
                size={getThemeValue('iconSize', mapping['item'])}
                style={{ marginRight: getThemeValue('iconMarginRight', mapping['item']) }}
            />
            <Text text={'标题'} />
        </Touchable>
        {lastItem && <Divider theme={theme} />}
    </Layout>
);

const styles = StyleSheet.create({
    container: {

    }
});

export default Item;
