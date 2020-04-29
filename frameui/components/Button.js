import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { getThemeValue, Text, mapping, themeColor } from '../';

const Button = props => (
    <View style={props.style}>
        {!props.shape && <FilledButton {...props} />}
        {props.shape == 'filled' && <FilledButton {...props} />}
        {props.shape == 'outline' && <OutlineButton {...props} />}
        {props.shape == 'purity' && <PurityButton {...props} />}
    </View>
);

/**
 * 颜色填充型按钮
 * @param {*} param0 
 * @param {按钮禁用状态下是否维持原主题} isLight 
 */
const FilledButton = ({ theme = themeColor, title, iconLeft, iconRight, size = 'medium', color = 'primary', shape = 'filled', onPress, disabled, isLight = false }) => {
    return (
        <TouchableOpacity
            style={[{
                marginVertical: getThemeValue(`marginVertical`, mapping['button'][size]),
                marginHorizontal: getThemeValue(`marginHorizontal`, mapping['button'][size]),
                minWidth: getThemeValue(`minWidth`, mapping['button'][size]),
                minHeight: getThemeValue(`minHeight`, mapping['button'][size]),
                // opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <View style={[styles.container, {
                paddingHorizontal: getThemeValue(`paddingHorizontal`, mapping['button'][size]),
                paddingVertical: getThemeValue(`paddingVertical`, mapping['button'][size]),
                backgroundColor: getThemeValue(`color-button-${shape}-${color}${disabled && !isLight ? "-disabled" : ""}`, theme),
                borderColor: getThemeValue(`color-button-border-${shape}-${color}${disabled && !isLight ? "-disabled" : ""}`, theme),
                borderRadius: getThemeValue(`borderRadius`, mapping['button'][size]),
            }]}>
                {iconLeft && iconLeft}
                {
                    title && <Text
                        theme={theme}
                        text={title}
                        textColor={getThemeValue(`color-button-text-${shape}-${color}${disabled && !isLight ? "-disabled" : ""}`, theme)}
                        fontSize={getThemeValue(`fontSize`, mapping['button'][size])}
                        fontWeight={getThemeValue(`fontWeight`, mapping['button'][size])}
                        style={{ marginHorizontal: getThemeValue(`fontMarginHorizontal`, mapping['button'][size]) }}
                    />
                }
                {iconRight && iconRight}
            </View>
        </TouchableOpacity>
    )
}


/**
 * 边框型按钮
 * @param {*} param0 
 */
const OutlineButton = ({ theme, title, iconLeft, iconRight, size = 'medium', color = 'primary', shape = 'outline', onPress, disabled, isLight = false }) => {
    return (
        <TouchableOpacity
            style={[{
                marginVertical: getThemeValue(`marginVertical`, mapping['button'][size]),
                marginHorizontal: getThemeValue(`marginHorizontal`, mapping['button'][size]),
                minWidth: getThemeValue(`minWidth`, mapping['button'][size]),
                minHeight: getThemeValue(`minHeight`, mapping['button'][size]),
                // opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <View style={[styles.container, {
                paddingHorizontal: getThemeValue(`paddingHorizontal`, mapping['button'][size]) - getThemeValue(`borderWidth`, mapping['button'][size]),
                paddingVertical: getThemeValue(`paddingVertical`, mapping['button'][size]) - getThemeValue(`borderWidth`, mapping['button'][size]),
                backgroundColor: getThemeValue(`color-button-${shape}-${color}${disabled && !isLight ? "-disabled" : ""}`, theme),
                borderColor: getThemeValue(`color-button-border-${shape}-${color}${disabled && !isLight ? "-disabled" : ""}`, theme),
                borderWidth: getThemeValue(`borderWidth`, mapping['button'][size]),
                borderRadius: getThemeValue(`borderRadius`, mapping['button'][size]),
            }]}>
                {iconLeft && iconLeft}
                {
                    title && <Text
                        theme={theme}
                        text={title}
                        textColor={getThemeValue(`color-button-text-${shape}-${color}${disabled && !isLight ? "-disabled" : ""}`, theme)}
                        fontSize={getThemeValue(`fontSize`, mapping['button'][size])}
                        fontWeight={getThemeValue(`fontWeight`, mapping['button'][size])}
                        style={{ marginHorizontal: getThemeValue(`fontMarginHorizontal`, mapping['button'][size]) }}
                    />
                }
                {iconRight && iconRight}
            </View>
        </TouchableOpacity>
    )
}


/**
 * 文字型按钮
 * @param {*} param0 
 */
const PurityButton = ({ theme, title, iconLeft, iconRight, size = 'medium', color = 'primary', shape = 'purity', onPress, disabled, isLight = false }) => {
    return (
        <TouchableOpacity
            style={[{
                marginVertical: getThemeValue(`marginVertical`, mapping['button'][size]),
                marginHorizontal: getThemeValue(`marginHorizontal`, mapping['button'][size]),
                minWidth: getThemeValue(`minWidth`, mapping['button'][size]),
                minHeight: getThemeValue(`minHeight`, mapping['button'][size]),
                // opacity: disabled ? 0.6 : 1
            }]}
            activeOpacity={.9} disabled={disabled} onPress={onPress}>
            <View style={[styles.container, {
                paddingHorizontal: getThemeValue(`paddingHorizontal`, mapping['button'][size]),
                paddingVertical: getThemeValue(`paddingVertical`, mapping['button'][size]),
                borderRadius: getThemeValue(`borderRadius`, mapping['button'][size]),
            }]}>
                {iconLeft && iconLeft}
                {
                    title && <Text
                        theme={theme}
                        text={title}
                        textColor={getThemeValue(`color-button-text-${shape}-${color}${disabled && !isLight ? "-disabled" : ""}`, theme)}
                        fontSize={getThemeValue(`fontSize`, mapping['button'][size])}
                        fontWeight={getThemeValue(`fontWeight`, mapping['button'][size])}
                        style={{ marginHorizontal: getThemeValue(`fontMarginHorizontal`, mapping['button'][size]) }}
                    />
                }
                {iconRight && iconRight}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
});

export default Button;
