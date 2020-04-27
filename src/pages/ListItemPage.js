import React, { Component } from 'react';
import { View as RNView, ScrollView } from 'react-native';
import { View, Toolbar, List, Item, Label } from '../../frameui';

class ListItemPage extends Component {
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
                <List>
                    <Item firstItem title={'title'} subtitle={'subtitle'} />
                    <Item title={'title'} onPress={() => { }} />
                    <Item title={'title'} labelComponent={<LabelComponent />} rightComponent={<LabelComponent />} subtitle={'subtitle'} onPress={() => { }} />
                    <Item lastItem title={'title'} subtitle={'subtitle'} />
                    <Item firstItem title={'title'} subtitle={'subtitle'} />
                    <Item title={'title'} subtitle={'subtitle'} />
                    <Item title={'title'} subtitle={'subtitle'} />
                    <Item lastItem title={'title'} subtitle={'subtitle'} />
                </List>
            </View>
        );
    }
}

const LabelComponent = props => {
    return (
        <RNView style={{ flexDirection: 'row' }}>
            <Label text={'标签'} />
            <Label text={'标签'} status={'success'} />
        </RNView>
    )
}

export default ListItemPage;
