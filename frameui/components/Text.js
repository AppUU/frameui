import React from 'react';
import { Text as RNText } from 'react-native';
import { getThemeValue } from '../styles/styles.service';

const Text = ({ theme, color }) => (
    <RNText style={{ color: getThemeValue(color, theme) }}>
        {'123'}
    </RNText>
);

export default Text;
