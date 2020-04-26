import React from 'react';
import { View, StyleSheet } from 'react-native';
import { themeColor, getThemeValue, Text, mapping } from '..';

const Label = ({ theme = themeColor, status = 'primary' }) => (
    <View style={[{
        alignItems: 'center', justifyContent: 'center',
        minWidth: getThemeValue('minWidth', mapping['label']),
        height: getThemeValue('height', mapping['label']),
        borderRadius: getThemeValue('borderRadius', mapping['label']),
        borderWidth: getThemeValue('borderWidth', mapping['label']),
        paddingHorizontal: getThemeValue('paddingHorizontal', mapping['label']),
        paddingVertical: getThemeValue('paddingVertical', mapping['label']),
        marginHorizontal: getThemeValue('marginHorizontal', mapping['label']),
        borderColor: getThemeValue(`color-label-border-${status}`, theme)
    }]}>
        <Text
            theme={theme}
            textColor={getThemeValue(`color-label-text-${status}`, theme)}
            text={'标签'}
            fontSize={getThemeValue('fontSize', mapping['label'])}
            fontWeight={getThemeValue('fontWeight', mapping['label'])}
        />
    </View>
);
const styles = StyleSheet.create({
    container: {
    }
});
export default Label;

        //右箭头
        // marginLeft: 5,
        // width: 0,
        // height: 0,
        // borderStyle: 'solid',
        // borderWidth: 6,
        // borderTopColor: 'transparent',//下箭头颜色
        // borderLeftColor: '#f76260',//右箭头颜色
        // borderBottomColor: 'transparent',//上箭头颜色
        // borderRightColor: 'transparent'//左箭头颜色
