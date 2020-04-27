import React, { Component } from 'react';
import { View as RNView } from 'react-native';
import { View, Toolbar, Card, CardHeader, Text } from '../../frameui';

class CardPage extends Component {
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

                <Card>
                    <CardHeader title={'标题'} subtitle={'副标题'} onPress={() => alert('这里可点击哦')} />
                    <RNView style={{ margin: 12 }}>
                        <Text text={'这是里面的文本这是里面的文本这是里面的文本这是里面的文本这是里面的文本这是里面的文本这是里面的文本这是里面的文本很长很长...'} lines={0} />
                    </RNView>
                </Card>
            </View>
        );
    }
}

export default CardPage;
