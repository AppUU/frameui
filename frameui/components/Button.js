import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { getThemeValue, getRgbaColor, Text, mScaleSize, mapping } from '../';

const Button = props => (
    <View style={props.style}>
        {props.shape == 'filled' && <FilledButton {...props} />}
        {props.shape == 'outline' && <OutlineButton {...props} />}
        {props.shape == 'ghost' && <GhostButton {...props} />}
    </View>
);

/**
 * 颜色填充型按钮
 * @param {*} param0 
 */
const FilledButton = ({ theme, text, size = 'medium', buttonColor = 'color-button-normal', textColor = 'color-button-text-normal', onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                marginVertical: mScaleSize(getThemeValue(`marginVertical`, mapping['button'][size])),
                marginHorizontal: mScaleSize(getThemeValue(`marginHorizontal`, mapping['button'][size])),
                paddingHorizontal: mScaleSize(getThemeValue(`paddingHorizontal`, mapping['button'][size])),
                paddingVertical: mScaleSize(getThemeValue(`paddingVertical`, mapping['button'][size])),
                backgroundColor: getThemeValue(buttonColor, theme),
                borderColor: getThemeValue(buttonColor, theme),
                minWidth: mScaleSize(getThemeValue(getThemeValue(`minWidth`, mapping['button'][size]), mapping)),
                minHeight: mScaleSize(getThemeValue(getThemeValue(`minHeight`, mapping['button'][size]), mapping)),
                borderWidth: getThemeValue(`borderWidth`, mapping['button'][size]),
                borderRadius: getThemeValue(`borderRadius`, mapping['button'][size]),
                opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <View>
                <Text
                    theme={theme} text={text}
                    textColor={textColor}
                    fontSize={getThemeValue(`fontSize`, mapping['button'][size])}
                    fontWeight={getThemeValue(`fontWeight`, mapping['button'][size])}
                />
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
                backgroundColor: getRgbaColor(getThemeValue(`buttonColor-${buttonColor}`, theme), 0.1),
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
                borderRadius: mScaleSize(getThemeValue(`borderRadius`, theme)),
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
