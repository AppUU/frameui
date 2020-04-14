import React, { Component } from 'react';
import { Layout, Button } from '../../frameui';

class ButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { theme } = this.props
        return (
            <Layout flex={1} centerVertical>
                <Button theme={theme} size={'large'} text={'normal'} onPress={() => alert('normal')} />
                <Button theme={theme} size={'large'} shape='outline' text={'normal'} />
                <Button theme={theme} size={'large'} shape='ghost' text={'normal'} />
                <Layout theme={theme} color={'primary'} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} disabled buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认开票'} onPress={() => alert('normal')} />
                </Layout>
                <Layout theme={theme} color={'primary'} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消开票'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认开票'} onPress={() => alert('normal')} />
                </Layout>
                <Layout theme={theme} color={'primary'} row centerHorizontal>
                    <Button theme={theme} buttonColor={'subtitle'} shape='outline' text={'取消'} onPress={() => alert('normal')} />
                    <Button theme={theme} text={'确认'} onPress={() => alert('normal')} />
                </Layout>
                <Layout theme={theme} color={'primary'} row centerHorizontal>
                    <Button theme={theme} size={'small'} buttonColor={'primary'} text={'全部评价'} onPress={() => alert('normal')} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'好评'} onPress={() => alert('normal')} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'中评'} onPress={() => alert('normal')} />
                    <Button theme={theme} size={'small'} buttonColor={'subtitle'} shape='outline' text={'差评'} onPress={() => alert('normal')} />
                </Layout>
            </Layout>
        );
    }
}

export default ButtonPage;
