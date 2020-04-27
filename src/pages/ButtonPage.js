import React, { Component } from 'react';
import { ScrollView, View as RNView, BackHandler } from 'react-native';
import { View, Layout, Button, mapping, Divider, CardHeader, Card, Toolbar, Item, Label, List } from '../../frameui';
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
        const { theme, title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <Layout theme={theme} row style={{ margin: 16 }}>
                    <Button theme={theme} shape='filled' title={'按钮'} />
                    <Button theme={theme} color={'success'} shape='filled' size={'small'} title={'按钮'} />
                    <Button theme={theme} color={'dark'} shape='filled' size={'small'} title={'按钮'} />
                </Layout>

                <Button theme={theme} shape='outline' size={'large'} title={'outline'} />
                <Button theme={theme} shape='filled' size={'large'} title={'filled'} />
                <Button theme={theme} shape='purity' size={'large'} title={'purity'} />
                <Button theme={theme} disabled shape='outline' size={'large'} title={'outline'} />
                <Button theme={theme} disabled shape='filled' size={'large'} title={'filled'} />
                <Button theme={theme} disabled shape='purity' size={'large'} title={'purity'} />
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
