import React, { Component } from "react";
import { View, Modal as RNModal, Animated, Platform, Easing, StyleSheet, Dimensions } from "react-native";
import RootSiblings from 'react-native-root-siblings';
import { Layout, Divider, Button, getThemeValue, getRgbaColor, Text, mScaleSize } from "..";

const { height } = Dimensions.get('window')
var isAndroid = Platform.OS == 'android'

export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false, //给android式的modal进行使用的
            animationSlide: new Animated.Value(0),
            animationFade: new Animated.Value(0)
        };
        //ios也可以指定使用android的实现方式
        if (this.props.useAndroid) {
            isAndroid = true
        }
    }

    static defaultProps = {
        animationType: 'fade',
        opacity: 0.4,
        negative: '取消',
        positive: '确认',
        onNegativePress: () => { },
        onPositivePress: () => { },
    }

    render() {
        this.RootSiblings && this.RootSiblings.update(this.renderIos())
        return isAndroid ? this.renderAndroid() : null
    }

    renderAndroid = () => {
        const { theme, opacity } = this.props
        return (
            <RNModal {...this.props}
                transparent={true}
                visible={this.state.visible}
                onRequestClose={() => {
                    if (this.props.onRequestClose) {
                        this.props.onRequestClose()
                    } else {
                        this.hidden()
                    }
                }}>
                <View style={[styles.root, {
                    backgroundColor: getRgbaColor(getThemeValue(`backgroundColor-black`, theme), opacity)
                }]}>
                    {this.renderContent()}
                </View>
            </RNModal>
        )
    }

    renderIos = () => {
        const { theme, opacity } = this.props
        return (
            <Animated.View style={[styles.root,
            {
                opacity: this.state.animationFade,
                backgroundColor: getRgbaColor(getThemeValue(`backgroundColor-black`, theme), opacity)
            },
            {
                transform: [{
                    translateY: this.state.animationSlide.interpolate({
                        inputRange: [0, 1],
                        outputRange: [height, 0]
                    }),
                }]
            }]}>
                {this.renderContent()}
            </Animated.View>
        );
    }


    renderContent() {
        const { theme, title, subtitle, negative, positive, onNegativePress, onPositivePress } = this.props
        return (
            <Layout theme={theme} style={styles.container}>
                <Layout theme={theme} color={'transparent'} center style={styles.modalTitle}>
                    <Text theme={theme} text={title} fontSize='large' />
                </Layout>
                <Divider theme={theme} />
                {this.props.children}
                <Divider theme={theme} />
                {
                    subtitle &&
                    <Layout theme={theme} color={'transparent'} center style={{ marginTop: mScaleSize(16) }}>
                        <Text theme={theme} fontSize='small' text={subtitle} />
                    </Layout>
                }
                <Layout theme={theme} color={'transparent'} row centerHorizontal style={{ marginVertical: mScaleSize(8) }}>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={negative} onPress={onNegativePress} />
                    <Button theme={theme} text={positive} onPress={onPositivePress} />
                </Layout>
            </Layout>
        )
    }


    show = (callback) => {
        if (this.isShow()) {
            return
        }
        if (isAndroid) {
            this.setState({ visible: true }, () => callback && callback())
        } else {
            this.RootSiblings = new RootSiblings(this.renderIos(), () => {
                if (this.props.animationType == 'fade') {
                    this.animationFadeIn(callback)
                } else if (this.props.animationType == 'slide') {
                    this.animationSlideIn(callback)
                } else {
                    this.animationNoneIn(callback)
                }
            });
        }
    }

    hidden = (callback) => {
        if (!this.isShow()) {
            return
        }
        if (isAndroid) {
            this.setState({ visible: false }, () => callback && callback())
        } else {
            if (this.props.animationType == 'fade') {
                this.animationFadeOut(callback)
            } else if (this.props.animationType == 'slide') {
                this.animationSlideOut(callback)
            } else {
                this.animationNoneOut(callback)
            }
        }
    }

    isShow = () => {
        if (isAndroid) {
            return this.state.visible
        } else {
            return this.RootSiblings ? true : false
        }
    }

    animationNoneIn = (callback) => {
        this.state.animationSlide.setValue(1)
        this.state.animationFade.setValue(1)
        callback && callback()
    }

    animationNoneOut = (callback) => {
        this.animationCallback(callback);
    }

    animationSlideIn = (callback) => {
        this.setState({ visible: true }, () => {
            this.state.animationSlide.setValue(0)
            this.state.animationFade.setValue(1)
            Animated.timing(this.state.animationSlide, {
                easing: Easing.linear(),
                duration: 300,
                toValue: 1,
            }).start(() => callback && callback());
        })
    }

    animationSlideOut = (callback) => {
        this.state.animationSlide.setValue(1)
        this.state.animationFade.setValue(1)
        Animated.timing(this.state.animationSlide, {
            easing: Easing.linear(),
            duration: 300,
            toValue: 0,
        }).start(() => this.animationCallback(callback));
    }

    animationFadeIn = (callback) => {
        this.setState({ visible: true }, () => {
            this.state.animationSlide.setValue(1)
            this.state.animationFade.setValue(0)
            Animated.timing(this.state.animationFade, {
                easing: Easing.linear(),
                duration: 300,
                toValue: 1,
            }).start(() => callback && callback());
        })
    }

    animationFadeOut = (callback) => {
        this.state.animationSlide.setValue(1)
        this.state.animationFade.setValue(1)
        Animated.timing(this.state.animationFade, {
            easing: Easing.linear(),
            duration: 300,
            toValue: 0,
        }).start(() => this.animationCallback(callback));
    }

    animationCallback = (callback) => {
        this.RootSiblings && this.RootSiblings.destroy(() => {
            callback && callback()
            this.RootSiblings = undefined
        })
    }
}

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '70%',
        borderRadius: 4
    },
    modalTitle: {
        height: mScaleSize(40)
    }
})