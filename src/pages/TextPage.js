import React, { Component } from 'react';
import { Layout, Text } from '../../frameui';

class TextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { theme } = this.props
        return (
            <Layout flex={1} centerVertical>
                <Text theme={theme} fontSize={'giant'} textColor={'primary'} text={'primary'} />
                <Text theme={theme} textColor={'success'} text={'primary'} />
                <Text theme={theme} textColor={'primary'} text={'primary'} />
                <Text theme={theme} textColor={'primary'} text={'primary'} />
                <Text theme={theme} textColor={'primary'} text={'primary'} />
            </Layout>
        );
    }
}

export default TextPage;
