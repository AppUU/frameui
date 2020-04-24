import React, { PureComponent } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Layout, Icon, _ANDROID_, getStatusBarHeight, getThemeValue, Text, Divider, Touchable, themeColor } from '..';

let toolbarHeight = 40

class Toolbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            statusBarHeight: 0
        };
    }

    UNSAFE_componentWillMount() {
        getStatusBarHeight().then(result => this.setState({ statusBarHeight: result.height }));
    }

    static defaultProps = {
        theme: themeColor,
        barStyle: 'light',
    }

    render() {
        const { theme, barStyle, title, subtitle } = this.props
        const { statusBarHeight } = this.state
        return (
            <View>
                <StatusBar barStyle={`${barStyle}-content`} backgroundColor={'transparent'} hidden={false} translucent={true} />
                <Layout theme={theme} color={getThemeValue(`color-toolbar-${barStyle}`, theme)}
                    style={[styles.container, {
                        height: toolbarHeight + statusBarHeight,
                        paddingTop: statusBarHeight,
                    }]}>
                    <Layout theme={theme} flex={1} color={'transparent'} row centerVertical>
                        <LeftComponent theme={theme} barStyle={barStyle} />
                        <TitleComponent theme={theme} title={title} subtitle={subtitle} barStyle={barStyle} />
                        <RightComponent theme={theme} barStyle={barStyle} />
                    </Layout>
                </Layout>
                <Divider theme={theme} />
            </View>
        );
    }
}

const LeftComponent = ({ theme, barStyle, onLeftPress }) => {
    return (
        <Touchable onPress={onLeftPress} style={[styles.leftComponent, { display: onLeftPress ? 'flex' : 'none' }]}>
            <Icon name={'chevron-left'} color={getThemeValue(`color-toolbar-icon-${barStyle}`, theme)} size={28} />
        </Touchable>
    )
}
const TitleComponent = ({ theme, barStyle, title, subtitle }) => {
    return (
        <View style={styles.titleComponent}>
            <Text theme={theme} textColor={getThemeValue(`color-toolbar-title-${barStyle}`, theme)} fontSize={'large'} text={title} />
            {subtitle && <Text theme={theme} textColor={getThemeValue(`color-toolbar-subtitle-${barStyle}`, theme)} fontSize={'small'} text={subtitle} style={{ marginTop: 4 }} />}
        </View>
    )
}
const RightComponent = ({ theme, barStyle, rightIcon, onRightPress }) => {
    return (
        <Touchable onPress={onRightPress} style={[styles.rightComponent, { display: onRightPress ? 'flex' : 'none' }]}>
            <Icon name={'chevron-left'} color={getThemeValue(`color-toolbar-icon-${barStyle}`, theme)} size={28} />
        </Touchable>
    )
}

const styles = StyleSheet.create({
    container: {},
    leftComponent: { paddingHorizontal: 6, height: toolbarHeight, position: 'absolute', left: 0, alignItems: 'center', justifyContent: 'center', },
    rightComponent: { paddingHorizontal: 6, height: toolbarHeight, position: 'absolute', right: 0, alignItems: 'center', justifyContent: 'center', },
    titleComponent: { marginHorizontal: 48, flex: 1, alignItems: 'center', justifyContent: 'center', }
});
export default Toolbar;
