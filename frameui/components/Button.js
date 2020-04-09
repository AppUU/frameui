import React, { PureComponent } from 'react';
import { TouchableOpacity, Text as RNText } from 'react-native';
import { getThemeValue } from '../';

class Button extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    defaultProps = {
        disabled: false,
        onPress: () => { }
    }

    render() {
        const { theme, bgColor, color, onPress, disabled } = this.props
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: getThemeValue(`bgColor-${bgColor}`, theme),
                }}
                activeOpacity={.9} disabled={disabled} onPress={onPress}>
                <RNText style={{ color: getThemeValue(color, theme) }}>
                    {'123'}
                </RNText>
            </TouchableOpacity>
        );
    }
}

export default Button;
