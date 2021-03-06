import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Icon, Divider, getThemeValue, Touchable, themeColor } from '..';

const CardHeader = props => {
    const { theme = themeColor, onPress, title = '', subtitle = '', paragraph = '' } = props
    return (
        <Touchable onPress={onPress}>
            <Layout theme={theme} color={'transparent'} row centerVertical style={styles.cardHeaderContainer}>
                <Divider shape='primary' style={{ width: 4, height: 20, marginRight: 4, borderRadius: 2 }} />
                <Layout theme={theme} color={'transparent'} row centerVertical flex={1}>
                    <Layout theme={theme} color={'transparent'} row alignItems={'flex-end'} >
                        <Text theme={theme} text={title} />
                        <Text theme={theme} text={subtitle} textColor={'subtitle'} fontSize={'tiny'} style={{ marginLeft: 4 }} />
                    </Layout>
                </Layout>
                <Layout theme={theme} color={'transparent'} row centerVertical>
                    <Text theme={theme} text={paragraph} textColor={'paragraph'} fontSize={'tiny'} style={{ marginLeft: 16 }} />
                    {onPress && <Icon source={{ name: 'chevron-right' }} size={16} color={getThemeValue(`color-cardheader-paragraph`, theme)} />}
                </Layout>
            </Layout>
            <Layout theme={theme} color={'transparent'} style={{ marginHorizontal: 12 }} >
                <Divider theme={theme} />
            </Layout>
        </Touchable>
    )
}
const styles = StyleSheet.create({
    cardHeaderContainer: {
        marginHorizontal: 12,
        height: 40
    }
});
export default CardHeader;
