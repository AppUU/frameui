import React, { Component } from 'react';
import { View, Toolbar, Tooltip, Layout, Button, List, Item } from '../../frameui';

class TooltipPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { theme, title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <Tooltip ref={'tooltip'} width={'100%'} popover={
                    <Layout style={{ width: '100%' }}>
                        <List>
                            <Item title={'选项1'} onPress={this.onPress} />
                            <Item title={'选项2'} onPress={this.onPress} />
                            <Item title={'选项3'} onPress={this.onPress} />
                            <Item title={'选项3'} onPress={this.onPress} />
                            <Item title={'选项3'} onPress={this.onPress} />
                            <Item title={'选项3'} onPress={this.onPress} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                            <Item title={'选项3'} />
                        </List>
                    </Layout>
                }>
                    <Button title={'点击'} disabled />
                </Tooltip>
            </View>
        );
    }
    onPress = () => {
        this.refs.tooltip.toggleTooltip()
        alert('123')
    }
}

export default TooltipPage;
