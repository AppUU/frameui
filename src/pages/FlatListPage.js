import React, { Component } from 'react';
import { View, Item, Toolbar, FlatList } from '../../frameui';

class FlatListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: new Array(3).fill(1).map((x, i) => ({ id: i, text: `Item No. ${i}` })),
        };
    }

    render() {
        const { data } = this.state
        const { title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    ref={(ref) => { this.flatList = ref; }}
                    onRefreshing={() => new Promise((r) => {
                        setTimeout(() => {
                            r();
                        }, 3000);
                    })}
                    onLoadMore={() => new Promise((r) => {
                        setTimeout(() => {
                            const no = this.state.data.length;
                            const newArr = new Array(4).fill(1).map((x, i) => ({ id: i + no, text: `Item No. ${i + no}` }));
                            this.setState({ data: this.state.data.concat(newArr) });
                            r();
                        }, 2500);
                    })}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }


    renderItem = ({ item, i }) => {
        return <Item title={item.text} key={i} />
    }

}

export default FlatListPage;
