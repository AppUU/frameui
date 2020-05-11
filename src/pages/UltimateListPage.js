import React, { Component } from 'react';
import { View, Toolbar, UltimateListView, Item } from '../../frameui';

class UltimateListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: 'list',
        };
    }

    render() {
        const { title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />
                <UltimateListView
                    ref={ref => this.listView = ref}
                    key={this.state.layout}
                    onFetch={this.onFetch}
                    keyExtractor={(item, index) => `${index} - ${item}`}
                    refreshableMode="advanced" // basic or advanced
                    item={this.renderItem} // this takes three params (item, index, separator)       
                    displayDate
                    arrowImageStyle={{ width: 20, height: 20, resizeMode: 'contain' }}
                />
            </View>
        );
    }
    sleep = time => new Promise(resolve => setTimeout(() => resolve(), time))
    
    onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            let pageLimit = 24
            if (this.state.layout === 'grid') pageLimit = 60
            const skip = (page - 1) * pageLimit
            let rowData = Array.from({ length: pageLimit }, (value, index) => `item -> ${index + skip}`)
            if (page === 10) {
                rowData = []
            }
            await this.sleep(2000)
            startFetch(rowData, pageLimit)
        } catch (err) {
            abortFetch() // manually stop the refresh or pagination if it encounters network error
            console.log(err)
        }
    }


    renderItem = (item) => {
        return <Item title={item} />
    }
}

export default UltimateListPage;
