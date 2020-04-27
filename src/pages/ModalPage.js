import React, { Component } from 'react';
import { View, Toolbar, Layout, Button, Modal } from '../../frameui';

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
                    <Button title={'modal'} onPress={this.onPress} />
                </Layout>

                <Modal ref={'alert'} />
            </View>
        );
    }

    onPress = () => {
        this.refs.alert.show()
    }
}

export default ModalPage;
