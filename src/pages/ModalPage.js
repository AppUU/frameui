import React, { Component } from 'react';
import { View, Toolbar, Layout, Button, Modal, Text } from '../../frameui';

class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <Layout row>
                    <Button title={'alert'} onPress={this.onAlertPress} />
                </Layout>

                <Modal title={'alert'} subtitle={'提示在这'} ref={'alert'} onPositivePress={() => { }} onNegativePress={() => this.refs.alert.hidden()} >
                    <Layout center style={{ margin: 12 }}>
                        <Text text={'我是这个弹窗的内容'} />
                        <Text text={'我是这个弹窗的内容'} />
                        <Text text={'我是这个弹窗的内容'} />
                        <Text text={'我是这个弹窗的内容'} />
                    </Layout>
                </Modal>
                {/* <Modal title={'popup'} ref={'popup'} onPositivePress={() => { }} onNegativePress={() => this.refs.popup.hidden()} /> */}
            </View>
        );
    }

    onAlertPress = () => {
        this.refs.alert.show()
    }

    onPopupPress = () => {
        this.refs.popup.show()
    }
}

export default ModalPage;
