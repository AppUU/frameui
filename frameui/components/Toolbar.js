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
        barStyle: 'light',
    }

    render() {
        const { theme = themeColor, barStyle } = this.props
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
                        <LeftComponent theme={theme} {...this.props} />
                        <TitleComponent theme={theme} {...this.props} />
                        <RightComponent theme={theme} {...this.props} />
                    </Layout>
                </Layout>
                <Divider theme={theme} />
            </View>
        );
    }
}

const LeftComponent = props => {
    if (!props.onPress) return null
    return (
        <Touchable onPress={props.onPress} style={[styles.leftComponent]}>
            <Icon source={{ name: 'chevron-left' }} color={getThemeValue(`color-toolbar-icon-${props.barStyle}`, props.theme)} size={28} />
        </Touchable>
    )
}
const TitleComponent = props => {
    return (
        <View style={styles.titleComponent}>
            <Text theme={props.theme} textColor={getThemeValue(`color-toolbar-title-${props.barStyle}`, props.theme)} fontSize={'large'} fontWeight={'500'} text={props.title} />
            {props.subtitle && <Text theme={props.theme} textColor={getThemeValue(`color-toolbar-subtitle-${props.barStyle}`, props.theme)} fontSize={'small'} text={props.subtitle} style={{ marginTop: 4 }} />}
        </View>
    )
}
const RightComponent = props => {
    if (!props.onRightPress) return null
    return (
        <Touchable onPress={props.onRightPress} style={[styles.rightComponent]}>
            <Icon source={props.rightSource} color={getThemeValue(`color-toolbar-icon-${props.barStyle}`, props.theme)} size={28} />
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
