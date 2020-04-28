import React, { PureComponent } from "react";
import { View, Modal as RNModal, Animated, Platform, Easing, StyleSheet, Dimensions } from "react-native";
import PropTypes from 'prop-types';
import RootSiblings from 'react-native-root-siblings';
import { Layout, Divider, Button, getRgbaColor, Text, themeColor } from "..";

const { height } = Dimensions.get('window')
var isAndroid = Platform.OS == 'android'

class Modal extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            visible: false, //给android式的modal进行使用的
            animationSlide: new Animated.Value(0),
            animationFade: new Animated.Value(0),
            backgroundColor: 'rgba(0,0,0,.3)'
        };
        //ios也可以指定使用android的实现方式
        if (this.props.useAndroid) {
            isAndroid = true
        }
    }

    static propTypes = {
        type: PropTypes.string,//'popup'
        opacity: PropTypes.number,
        negative: PropTypes.string,
        positive: PropTypes.string,
    }

    static defaultProps = {
        // type: 'slide',
        type: 'alert',//'popup'
        opacity: 0.4,
        negative: '取消',
        positive: '确认',
    }

    render() {
        this.RootSiblings && this.RootSiblings.update(this.renderIos())
        return isAndroid ? this.renderAndroid() : null
    }

    renderAndroid = () => {
        const { type } = this.props
        const { backgroundColor } = this.state
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
                <View style={[type == 'alert' ? styles.alertroot : styles.popuproot, {
                    backgroundColor: backgroundColor
                }]}>
                    {type == 'alert' && this.renderAlertContent()}
                    {type == 'popup' && this.renderPopupContent()}
                </View>
            </RNModal>
        )
    }

    renderIos = () => {
        const { type } = this.props
        const { backgroundColor } = this.state
        return (
            <Animated.View style={[type == 'alert' ? styles.alertroot : styles.popuproot,
            {
                opacity: this.state.animationFade,
                backgroundColor: backgroundColor
            },
            {
                transform: [{
                    translateY: this.state.animationSlide.interpolate({
                        inputRange: [0, 1],
                        outputRange: [height, 0]
                    }),
                }]
            }]}>
                {type == 'alert' && this.renderAlertContent()}
                {type == 'popup' && this.renderPopupContent()}
            </Animated.View>
        );
    }


    /**alert */
    renderAlertContent() {
        const { theme = themeColor, headerComponent, title, subtitle, negative, positive, onNegativePress, onPositivePress } = this.props

        return (
            <Layout theme={theme} style={[styles.alertcontainer]}>

                {/* 头部，自定义与默认 */}
                {
                    !headerComponent &&
                    <Layout theme={theme} color={'transparent'} center style={styles.modalTitle}>
                        <Text theme={theme} text={title} fontSize='large' />
                    </Layout>
                }
                {/* 头部，自定义与默认 */}
                {headerComponent && headerComponent}
                {/* 分割线 */}
                <Divider theme={theme} />
                {/* 内容 */}
                {this.props.children}
                {/* 分割线 */}
                <Divider theme={theme} />
                {/* 子标题 */}
                {
                    subtitle &&
                    <Layout theme={theme} color={'transparent'} center style={{ marginTop: 16 }}>
                        <Text theme={theme} fontSize='small' text={subtitle} />
                    </Layout>
                }
                {/* 按钮 */}
                <Layout theme={theme} color={'transparent'} row={onNegativePress && onPositivePress} centerHorizontal={onNegativePress && onPositivePress} style={{ marginVertical: 8 }}>
                    {onNegativePress && <Button theme={theme} title={negative} color={'dark'} shape='outline' onPress={onNegativePress} />}
                    {onPositivePress && <Button theme={theme} title={positive} onPress={onPositivePress} />}
                </Layout>
            </Layout>
        )
    }


    /**popup */
    renderPopupContent() {
        const { theme = themeColor, headerComponent, type, title, subtitle, negative, positive, onNegativePress, onPositivePress } = this.props
        return (
            <Layout theme={theme} style={styles.popupcontainer}>

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
                if (this.props.type == 'alert') {
                    this.animationFadeIn(callback)
                } else if (this.props.type == 'popup') {
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
            if (this.props.type == 'alert') {
                this.animationFadeOut(callback)
            } else if (this.props.type == 'popup') {
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
            }).start(() => {
                callback && callback()
            });
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
            }).start(() => {
                callback && callback()
            });
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
    alertroot: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    popuproot: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        // alignItems: 'flex-end'
    },
    alertcontainer: {
        width: '70%',
        borderRadius: 8
    },
    popupcontainer: {
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: '70%'
    },
    modalTitle: {
        height: 40
    }
})

export default Modal;