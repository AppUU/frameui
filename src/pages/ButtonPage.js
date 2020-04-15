import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Layout, Button, Divider, Text, Card } from '../../frameui';
import Modal from '../../frameui/components/Modal';

class ButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackhandler)
    }

    render() {
        const { theme } = this.props
        const { visible } = this.state
        return (
            <Layout theme={theme} color={'primary'} flex={1} centerVertical>
                <Card theme={theme}>
                    <Button theme={theme} size={'large'} shape='outline' text={'normal'} />
                </Card>
                <Button theme={theme} size={'large'} shape='outline' text={'normal'} />
                <Divider theme={theme} shape={'splitter'} />
                <Button theme={theme} size={'large'} shape='ghost' text={'normal'} />
                <Layout theme={theme} color={'primary'} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} disabled buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认开票'} onPress={() => alert('normal')} />
                </Layout>
                <Layout theme={theme} color={'primary'} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认开票'} onPress={() => alert('normal')} />
                </Layout>
                <Layout theme={theme} color={'primary'} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认'} onPress={() => alert('normal')} />
                </Layout>

                <Layout theme={theme} color={'primary'} row centerHorizontal>
                    <Button theme={theme} size={'small'} buttonColor={'primary'} text={'全部评价'} onPress={this.openModal} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'好评'} onPress={() => alert('normal')} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'中评'} onPress={() => alert('normal')} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'差评'} onPress={() => alert('normal')} />
                </Layout>
                <Modal theme={theme} title={'提示'} ref={'modal'} onNegativePress={this.hideModal}>
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
            return false
        }
        return true
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackhandler)
    }
}

export default ButtonPage;
