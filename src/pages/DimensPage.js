import React, { Component } from 'react';
import { Dimensions, StatusBar, PixelRatio, View, Text, StyleSheet } from 'react-native';
import { mScaleSize } from '../../frameui';
const { width: windowWidth, height: windowHeight, scale } = Dimensions.get('window')
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')
let fontScale = PixelRatio.getFontScale();

class DimensPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.container}>
                </View>
                <View style={styles.container1}>
                </View>
                <Text> {"状态栏高度：" + StatusBar.currentHeight * scale + 'px'} </Text>
                <Text> {"window宽度：" + windowWidth * scale + 'px'} </Text>
                <Text> {"screen手机宽度：" + screenWidth * scale + 'px'} </Text>
                <Text> {"window高度：" + windowHeight * scale + 'px'} </Text>
                <Text> {"screen手机高度：" + screenHeight * scale + 'px'} </Text>
                <Text> {"文字缩放比：" + fontScale} </Text>
                <Text> {"分辨率scale：" + scale} </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: 100,
        marginTop: 5,
        height: 90,
        backgroundColor: '#6435c9',
    },
    container1: {
        width: mScaleSize(100),
        marginTop: 5,
        height: 90,
        backgroundColor: '#6435c9',
    }
});
export default DimensPage;
