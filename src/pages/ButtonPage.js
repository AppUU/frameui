import React, { Component } from 'react';
import { Text as RNText, BackHandler } from 'react-native';
import { View, Layout, Button, mapping, Divider, CardHeader, Card, Toolbar, Item } from '../../frameui';
import Icon from 'react-native-vector-icons/Feather';

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
            <View theme={theme}>
                <Toolbar theme={theme} title={'标题'} subtitle={'副标题'} />
                <Layout theme={theme} row style={{ margin: 16 }}>
                    <Button theme={theme} shape='filled' size={'small'} title={'按钮'} />
                    <Button theme={theme} color={'success'} shape='filled' size={'small'} title={'按钮'} />
                    <Button theme={theme} color={'dark'} shape='filled' size={'small'} title={'按钮'} />
                </Layout>
                <Divider />
                <Card>
                    <CardHeader title={'卡片标题'} subtitle={'卡片副标题'} onPress={() => { }} />
                    <Layout theme={theme} row color={'transparent'}>
                        <Button theme={theme} shape='filled' size={'small'} title={'按钮'} />
                        <Button theme={theme} color={'success'} shape='filled' size={'small'} title={'按钮'} />
                        <Button theme={theme} color={'dark'} shape='filled' size={'small'} title={'按钮'} />
                    </Layout>
                </Card>
                <Item />
                <Button theme={theme} shape='outline' size={'large'} title={'这是个按钮'} />
                <Button theme={theme} shape='filled' size={'large'} title={'按钮'} />
                <Button theme={theme} shape='purity' size={'large'} title={'这是个按钮'} />
            </View>
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

const IconLeft = () => {
    return (
        <Icon name='x' size={18} color={'white'} />
    )
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
