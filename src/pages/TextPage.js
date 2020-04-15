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
            <Layout theme={theme} flex={1} centerVertical>
                <Text theme={theme} text={'normal'} />
                <Text theme={theme} fontSize={'small'} textColor={'success'} text={'primary'} />
                <Text theme={theme} fontSize={'large'} textColor={'success'} text={'primary'} />
                <Text theme={theme} fontSize={'giant'} textColor={'success'} text={'primary'} />
            </Layout>
        );
    }
}

export default TextPage;
