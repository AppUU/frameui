import React from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import { Icon, mapping, getThemeValue, themeColor, _ANDROID_ } from '..';

const TextInput = (props, { theme = themeColor, size = 'medium' }) => (
    <View style={[{
        flexDirection: 'row',
        alignItems: 'center',
        height: getThemeValue('height', mapping['textinput'][size]),
        paddingHorizontal: getThemeValue('paddingHorizontal', mapping['textinput'][size]),
        backgroundColor: getThemeValue(`color-text-input-background${props.disabled ? '-disabled' : ''}`, theme),
        borderTopColor: getThemeValue('color-text-input-border', theme),
        borderBottomColor: getThemeValue('color-text-input-border', theme),
        borderTopWidth: getThemeValue('borderWidth', mapping['textinput'][size]),
        borderBottomWidth: getThemeValue('borderWidth', mapping['textinput'][size]),
    }, props.viewStyle]}>
        <View>
            {props.leftComponent && props.leftComponent}
            {props.leftSource && <Icon size={getThemeValue('leftIconSize', mapping['textinput'][size])} source={props.leftSource} style={{ marginRight: getThemeValue('leftComponentMarginRight', mapping['textinput'][size]) }} />}
        </View>
        <RNTextInput
            {...props} style={{ flex: 1 }}
            underlineColorAndroid={'transparent'}
            editable={!props.disabled}
            
            placeholderTextColor={getThemeValue(`color-text-input-placeholder${props.disabled ? '-disabled' : ''}`, theme)}
        />
        <View>
            {props.rightComponent && props.rightComponent}
            {props.rightSource && <Icon size={getThemeValue('rightIconSize', mapping['textinput'][size])} source={props.rightSource} style={{ marginLeft: getThemeValue('rightComponentMarginLeft', mapping['textinput'][size]) }} />}
        </View>
    </View>
);

export default TextInput;
