import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Divider, getThemeValue, mScaleSize, Touchable } from '..';
import Icon from 'react-native-vector-icons/Feather';

const CardHeader = props => {
    const { theme, onPress, title = '', subtitle = '', paragraph = '' } = props
    return (
        <Touchable onPress={onPress}>
            <Layout theme={theme} color={'transparent'} row centerVertical style={styles.cardHeaderContainer}>
                <Icon name={'list'} size={16} color={getThemeValue(`textColor-primary`, theme)} style={{ marginRight: mScaleSize(4) }}/>
                <Layout theme={theme} color={'transparent'} row centerVertical flex={1}>
                    <Layout theme={theme} color={'transparent'} row alignItems={'flex-end'} >
                        <Text theme={theme} text={title} />
                        <Text theme={theme} text={subtitle} textColor={'subtitle'} fontSize={'tiny'} style={{ marginLeft: mScaleSize(4) }} />
                    </Layout>
                </Layout>
                <Layout theme={theme} color={'transparent'} row centerVertical>
                    <Text theme={theme} text={paragraph} textColor={'paragraph'} fontSize={'tiny'} style={{ marginLeft: mScaleSize(16) }} />
                    <Icon name={'chevron-right'} size={16} color={getThemeValue(`textColor-paragraph`, theme)} />
                </Layout>
            </Layout>
            <Layout theme={theme} color={'transparent'} style={{ marginHorizontal: mScaleSize(12) }} >
                <Divider theme={theme} />
            </Layout>
        </Touchable>
    )
}
const styles = StyleSheet.create({
    cardHeaderContainer: {
        marginHorizontal: mScaleSize(12),
        height: mScaleSize(40)
    }
});
export default CardHeader;
