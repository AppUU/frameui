import React, { Component } from 'react';
import { Text as RNText, BackHandler } from 'react-native';
import { Layout, Button, mapping } from '../../frameui';

class ButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackhandler)
    }

    render() {
        const { theme } = this.props
        return (
            <Layout theme={theme} flex={1} center>
                <RNText>{'123'}</RNText>
                <Button theme={theme} shape='filled' size={'large'} text={'123'} />
                <Button theme={theme} shape='filled' text={'123'} />
                <Button theme={theme} shape='filled' text={'123'} />
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
