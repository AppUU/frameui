import React, { PureComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { getThemeValue, getRgbaColor, Text } from '../';

class Button extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static defaultProps = {
        shape: 'filled',
        color: 'normal',
        size: 'medium',
        buttonColor: 'primary',
        disabled: false,
        onPress: () => { }
    }

    render() {
        return (
            <View>
                {this.props.shape == 'filled' && <FilledButton {...this.props} />}
                {this.props.shape == 'outline' && <OutlineButton {...this.props} />}
                {this.props.shape == 'ghost' && <GhostButton {...this.props} />}
            </View>
        );
    }
}

/**
 * filled button
 * @param {*} param0 
 */
const FilledButton = ({ theme, text, size, buttonColor, color, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                // margin: getThemeValue(`margin-${size}`, theme),
                marginVertical: 8,
                marginHorizontal: 16,
                paddingHorizontal: getThemeValue(`paddingHorizontal-${size}`, theme),
                paddingVertical: getThemeValue(`paddingVertical-${size}`, theme),
                backgroundColor: getThemeValue(`buttonColor-${buttonColor}`, theme),
                borderColor: getThemeValue(`buttonColor-${buttonColor}`, theme),
                borderWidth: 1,
                opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <Text theme={theme} text={text} color={color} size={size} />
        </TouchableOpacity>
    )
}


const OutlineButton = ({ theme, text, size, buttonColor, color, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                margin: getThemeValue(`margin-${size}`, theme),
                paddingHorizontal: getThemeValue(`paddingHorizontal-${size}`, theme),
                paddingVertical: getThemeValue(`paddingVertical-${size}`, theme),
                backgroundColor: getRgbaColor(getThemeValue(`buttonColor-${buttonColor}`, theme), 0.2),
                borderColor: getThemeValue(`buttonColor-${buttonColor}`, theme),
                borderWidth: 1,
                opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <Text theme={theme} text={text} color={buttonColor} size={size} />
        </TouchableOpacity>
    )
}

const GhostButton = ({ theme, text, size, buttonColor, color, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                margin: getThemeValue(`margin-${size}`, theme),
                paddingHorizontal: getThemeValue(`paddingHorizontal-${size}`, theme),
                paddingVertical: getThemeValue(`paddingVertical-${size}`, theme),
                borderColor: 'transparent',
                borderWidth: 1,
                opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <Text theme={theme} text={text} color={buttonColor} size={size} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: { borderRadius: 2, alignItems: 'center', justifyContent: 'center' }
});

export default Button;
