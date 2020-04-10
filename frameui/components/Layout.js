import React from 'react';
import { View } from 'react-native';

const Layout = ({ children, style }) => (
    <View style={style}>
        {children}
    </View>
);

export default Layout;
