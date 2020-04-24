import React from 'react';
import { View, StyleSheet, Platform, } from 'react-native';
import PropTypes from 'prop-types';
import { getThemeValue, themeColor } from '..';

const Card = props => {
    const { theme = themeColor, children, elevation, opacity, cornerRadius } = props;

    const cardStyle = Platform.select({
        ios: () =>
            StyleSheet.create({
                container: {
                    shadowRadius: elevation,
                    shadowOpacity: opacity,
                    shadowOffset: { width: 0, height: elevation },
                    borderRadius: cornerRadius,
                    backgroundColor: getThemeValue(`color-card-background`, theme),
                    marginHorizontal: 16, marginVertical: 8
                }
            }),
        android: () =>
            StyleSheet.create({
                container: {
                    elevation: elevation,
                    borderRadius: cornerRadius,
                    backgroundColor: getThemeValue(`color-card-background`, theme),
                    marginHorizontal: 16
                }
            })
    })();

    return (
        <View style={[cardStyle.container, props.style]}>
            {/* {headerComponent && headerComponent} */}
            {children}
            {/* {footerComponent && footerComponent} */}
        </View>
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

export default Card