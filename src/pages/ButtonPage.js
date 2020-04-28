import React, { Component } from 'react';
import { View, Layout, Button, Toolbar } from '../../frameui';

class ButtonPage extends Component {
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
                <Layout theme={theme} row style={{ margin: 16 }}>
                    <Button theme={theme} shape='filled' title={'按钮'} />
                    <Button theme={theme} shape='outline' title={'按钮'} />
                    <Button theme={theme} shape='purity' title={'按钮'} />
                </Layout>
                <Layout theme={theme} row style={{ margin: 16 }}>
                    <Button theme={theme} shape='filled' size={'small'} title={'按钮'} />
                    <Button theme={theme} color={'success'} shape='filled' size={'small'} title={'按钮'} />
                    <Button theme={theme} color={'dark'} shape='filled' size={'small'} title={'按钮'} />
                </Layout>
                <Button theme={theme} shape='outline' size={'large'} title={'outline'} />
                <Button theme={theme} shape='filled' size={'large'} title={'filled'} />
                <Button theme={theme} shape='purity' size={'large'} title={'purity'} />
                <Button theme={theme} disabled shape='outline' size={'large'} title={'outline'} />
                <Button theme={theme} disabled shape='filled' size={'large'} title={'filled'} />
                <Button theme={theme} disabled shape='purity' size={'large'} title={'purity'} />
            </View>
        );
    }
}

export default ButtonPage;
