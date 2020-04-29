import React from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';

const {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} = ReactNative;

const StylePropType = PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
]);

const TooltipItem = ({ onPress, containerStyle, label, labelStyle }) => (
    <View style={[styles.container, containerStyle]}>
        <TouchableOpacity onPress={onPress}>
            {
                typeof label === 'string' ?
                    <Text style={[labelStyle]}>{label}</Text> :
                    label
            }
        </TouchableOpacity>
    </View>
);

TooltipItem.propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]).isRequired,
    containerStyle: StylePropType,
    labelStyle: StylePropType,
};

TooltipItem.defaultProps = {
    labelStyle: null,
    containerStyle: null,
};

export default TooltipItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
});