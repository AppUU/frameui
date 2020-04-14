import React, { PureComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { getThemeValue, getRgbaColor, Text, mScaleSize } from '../';

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
        textColor: 'white',
        disabled: false,
        onPress: () => { }
    }

    render() {
        return (
            <View style={this.props.style}>
                {this.props.shape == 'filled' && <FilledButton {...this.props} />}
                {this.props.shape == 'outline' && <OutlineButton {...this.props} />}
                {this.props.shape == 'ghost' && <GhostButton {...this.props} />}
            </View>
        );
    }
}

/**
 * 颜色填充型按钮
 * @param {*} param0 
 */
const FilledButton = ({ theme, text, size, buttonColor, textColor, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                marginVertical: mScaleSize(getThemeValue(`buttonMarginVertical-${size}`, theme)),
                marginHorizontal: mScaleSize(getThemeValue(`buttonMarginHorizontal-${size}`, theme)),
                paddingHorizontal: mScaleSize(getThemeValue(`buttonPaddingHorizontal-${size}`, theme)),
                paddingVertical: mScaleSize(getThemeValue(`buttonPaddingVertical-${size}`, theme)),
                backgroundColor: getThemeValue(`buttonColor-${buttonColor}`, theme),
                borderColor: getThemeValue(`buttonColor-${buttonColor}`, theme),
                minWidth: mScaleSize(getThemeValue(`buttonMinWidth-${size}`, theme)),
                minHeight: mScaleSize(getThemeValue(`buttonMinHeight-${size}`, theme)),
                borderWidth: 1,
                opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <View>
                <Text theme={theme} text={text} textColor={textColor} fontSize={size} />
            </View>
        </TouchableOpacity>
    )
}


const OutlineButton = ({ theme, text, size, buttonColor, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                marginVertical: mScaleSize(getThemeValue(`buttonMarginVertical-${size}`, theme)),
                marginHorizontal: mScaleSize(getThemeValue(`buttonMarginHorizontal-${size}`, theme)),
                paddingHorizontal: mScaleSize(getThemeValue(`buttonPaddingHorizontal-${size}`, theme)),
                paddingVertical: mScaleSize(getThemeValue(`buttonPaddingVertical-${size}`, theme)),
                backgroundColor: getRgbaColor(getThemeValue(`buttonColor-${buttonColor}`, theme), 0.2),
                borderColor: getThemeValue(`buttonColor-${buttonColor}`, theme),
                borderWidth: 1,
                minWidth: mScaleSize(getThemeValue(`buttonMinWidth-${size}`, theme)),
                minHeight: mScaleSize(getThemeValue(`buttonMinHeight-${size}`, theme)),
                opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <View>
                <Text theme={theme} text={text} textColor={buttonColor} fontSize={size} />
            </View>
        </TouchableOpacity>
    )
}

const GhostButton = ({ theme, text, size, buttonColor, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                marginVertical: mScaleSize(getThemeValue(`buttonMarginVertical-${size}`, theme)),
                marginHorizontal: mScaleSize(getThemeValue(`buttonMarginHorizontal-${size}`, theme)),
                paddingHorizontal: mScaleSize(getThemeValue(`buttonPaddingHorizontal-${size}`, theme)),
                paddingVertical: mScaleSize(getThemeValue(`buttonPaddingVertical-${size}`, theme)),
                borderColor: 'transparent',
                borderWidth: 1,
                minWidth: mScaleSize(getThemeValue(`buttonMinWidth-${size}`, theme)),
                minHeight: mScaleSize(getThemeValue(`buttonMinHeight-${size}`, theme)),
                opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <View>
                <Text theme={theme} text={text} textColor={buttonColor} fontSize={size} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: { borderRadius: 4, alignItems: 'center', justifyContent: 'center' }
});

export default Button;
