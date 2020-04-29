import React, { Component } from 'react';
import { View as RNView, Text as RNText } from 'react-native';
import { View, Toolbar, Tooltip, Text, Layout, Button, List, Item } from '../../frameui';

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
                <Tooltip
                    ref='tooltip'
                    middle={true}
                    buttonComponent={
                        <Button title={'点击'} disabled isLight />
                    }
                    tooltipOrientation={'horizontal'}
                    // tooltipContainerStyle={{ width: '100%' }}
                    items={[
                        {
                            label: '点赞',
                            onPress: () => { }
                        },
                        {
                            label: "取消",
                            onPress: () => { }
                        }
                    ]}
                // itemComponent={
                //     <List>
                //         <Item title={'选项1'} onPress={this.onPress} />
                //         <Item title={'选项2'} onPress={this.onPress} />
                //         <Item title={'选项3'} onPress={this.onPress} />
                //         <Item title={'选项3'} onPress={this.onPress} />
                //         <Item title={'选项3'} onPress={this.onPress} />
                //         <Item title={'选项3'} onPress={this.onPress} />
                //     </List>
                // }
                />
            </View>
        );
    }
    onPress = () => {
        this.refs.tooltip.hideModal()
    }
}

export default TooltipPage;
