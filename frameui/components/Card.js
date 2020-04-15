import React from 'react';
import { View, Dimensions, StyleSheet, Platform, } from 'react-native';
import PropTypes from 'prop-types';
import { getThemeValue, mScaleSize, Layout, Text, Divider } from '..';

const Card = props => {
    const { theme, color = 'normal', children, elevation, opacity, cornerRadius } = props;

    const cardStyle = Platform.select({
        ios: () =>
            StyleSheet.create({
                container: {
                    shadowRadius: elevation,
                    shadowOpacity: opacity,
                    shadowOffset: { width: 0, height: elevation },
                    borderRadius: cornerRadius,
                    backgroundColor: getThemeValue(`backgroundColor-${color}`, theme),
                    // width: mScaleSize(Dimensions.get('window').width - 32),
                    marginHorizontal: mScaleSize(16)
                }
            }),
        android: () =>
            StyleSheet.create({
                container: {
                    elevation: elevation,
                    borderRadius: cornerRadius,
                    backgroundColor: getThemeValue(`backgroundColor-${color}`, theme),
                    // width: mScaleSize(Dimensions.get('window').width - 32),
                    marginHorizontal: mScaleSize(16)
                }
            })
    })();

    return (
        <View style={[cardStyle.container, props.style]}>
            <CardHeader {...props} />
            <Layout theme={theme} color={'transparent'} style={{ marginHorizontal: 12 }} >
                <Divider theme={theme} />
            </Layout>
            {children}
        </View>
    )
}

const CardHeader = props => {
    const { theme } = props

    return (
        <Layout theme={theme} color={'transparent'} row centerVertical style={styles.cardHeaderContainer}>
            <Layout theme={theme} color={'transparent'} row centerVertical flex={1}>
                <Layout theme={theme} color={'transparent'} row alignItems={'flex-end'} >
                    <Text theme={theme} text={'主标题'} />
                    <Text theme={theme} text={'次标题'} textColor={'subtitle'} fontSize={'tiny'} style={{ marginLeft: mScaleSize(4) }} />
                </Layout>
            </Layout>
            <Layout theme={theme} color={'transparent'} row centerVertical>
                <Text theme={theme} text={'次标题'} textColor={'paragraph'} fontSize={'tiny'} style={{ marginLeft: mScaleSize(4) }} />
                <Text theme={theme} text={'>'} textColor={'paragraph'} fontSize={'tiny'} style={{ marginLeft: mScaleSize(4) }} />
            </Layout>
        </Layout>
    )
}


Card.prototype = {
    elevation: PropTypes.number,
    cornerRadius: PropTypes.number,
    opacity: PropTypes.number
}

Card.defaultProps = {
    elevation: 0,
    cornerRadius: 4,
    opacity: 0
}

const styles = StyleSheet.create({
    cardHeaderContainer: {
        marginHorizontal: mScaleSize(16),
        height: mScaleSize(40)
    }
});

export default Card