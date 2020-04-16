import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Layout, Button, Divider, Text, Card, CardHeader, Toolbar, StatusBarHeight } from '../../frameui';
import Modal from '../../frameui/components/Modal';

class ButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.log(StatusBarHeight());

        BackHandler.addEventListener('hardwareBackPress', this.onBackhandler)
    }

    render() {
        const { theme } = this.props
        return (
            <Layout theme={theme} color={'basic'} flex={1}>
                <Toolbar theme={theme} />
                <Card theme={theme} headerComponent={<CardHeader theme={theme} title={'标题'} subtitle={'次标题'} paragraph={'描述'} />}>
                    <Button theme={theme} size={'large'} shape='outline' text={'normal'} />
                </Card>
                <Button theme={theme} size={'large'} shape='outline' text={'normal'} />
                <Divider theme={theme} shape={'splitter'} />
                <Button theme={theme} size={'large'} shape='ghost' text={'normal'} />
                <Layout theme={theme} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} disabled buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认开票'} onPress={() => alert('normal')} />
                </Layout>
                <Layout theme={theme} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认开票'} onPress={() => alert('normal')} />
                </Layout>
                <Layout theme={theme} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认'} onPress={() => alert('normal')} />
                </Layout>

                <Layout theme={theme} row centerHorizontal>
                    <Button theme={theme} size={'small'} buttonColor={'primary'} text={'全部评价'} onPress={this.openModal} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'好评'} onPress={() => alert('normal')} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'中评'} onPress={() => alert('normal')} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'差评'} onPress={() => alert('normal')} />
                </Layout>
                <Modal theme={theme} type={'popup'} title={'提示'} ref={'modal'} onPositivePress={this.hideModal}>
                    <Layout theme={theme} center style={{ margin: 12 }}>
                        <Text theme={theme} text={'大佬很牛逼！！'} />
                    </Layout>
                </Modal>
            </Layout>
        );
    }

    openModal = () => {
        this.refs.modal.show()
    }

    hideModal = () => {
        this.refs.modal.hidden()
    }

    onBackhandler = () => {
        if (this.refs.modal.isShow()) {
            this.refs.modal.hidden()
            return true
        }
        return false
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackhandler)
    }
}

const ModalHeader = ({ theme }) => {
    return (
        <Layout theme={theme} color={'transparent'} row centerHorizontal>
            <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消'} onPress={() => alert('normal')} />
            <Button theme={theme} text={'确认'} onPress={() => alert('normal')} />
        </Layout>
    )
}

export default ButtonPage;
