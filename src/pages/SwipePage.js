import React, { Component } from 'react';
import { View, Toolbar, Item, SwipeListView, Icon } from '../../frameui';

class SwipePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Array(20)
                .fill("")
                .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
        };
    }

    render() {
        const { title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <SwipeListView
                    data={this.state.data}
                    renderItem={(data, rowMap) => (
                        <Item title={data.item.text} />
                    )}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                            <Icon source={{ name: 'feather' }} color={'red'} size={18} />
                            <Icon source={{ name: 'feather' }} color={'red'} size={18} />
                        </View>
                    )}
                    // leftOpenValue={75}
                    rightOpenValue={-75}
                />
            </View>
        );
    }
}

export default SwipePage;
