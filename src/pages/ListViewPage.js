import React, { Component } from 'react';
import { View, Toolbar, ListView, Item, RefreshState } from '../../frameui';

class ListViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
                { title: '1' },
            ],
            // refreshState: RefreshState.Idle,
            // refreshState: RefreshState.HeaderRefreshing,
            // refreshState: RefreshState.FooterRefreshing,
            // refreshState: RefreshState.NoMoreData,
            // refreshState: RefreshState.Failure,
            // refreshState: RefreshState.EmptyData,
        };
    }

    render() {
        const { dataList, refreshState } = this.state
        const { title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <ListView
                    data={dataList}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    refreshState={refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}
                />
            </View>
        );
    }


    renderItem = ({ item, i }) => {
        return <Item title={item.title} key={i} />
    }

    onHeaderRefresh = () => {
        this.setState({ refreshState: RefreshState.HeaderRefreshing })
        setTimeout(() => {
            this.setState({ refreshState: RefreshState.Idle })
        }, 3000)
    }

    onFooterRefresh = () => {
        this.setState({ refreshState: RefreshState.FooterRefreshing })
        setTimeout(() => {
            this.setState({ refreshState: RefreshState.Idle })
        }, 3000)
    }

    keyExtractor = (item, i) => i


}

export default ListViewPage;
