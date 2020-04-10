import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, getRgbaColor } from '../frameui';

class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        const { theme } = this.props
        return (
            <ScrollView style={{ marginTop: 48 }}>
                <Text theme={theme} text={'filled:'} color={'primary'} />
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
                    <Button theme={theme} size={'small'} shape={'filled'} text={'牛逼'} />
                    <Button theme={theme} size={'medium'} shape={'filled'} text={'大佬牛逼'} />
                    <Button theme={theme} size={'large'} shape={'filled'} text={'大佬牛逼'} />
                </View>
                <Button theme={theme} size={'large'} shape={'filled'} text={'大佬牛逼'} />

                <Text theme={theme} text={'outline:'} color={'primary'} />
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
                    <Button theme={theme} size={'small'} shape={'outline'} text={'牛逼'} />
                    <Button theme={theme} size={'medium'} shape={'outline'} text={'大佬牛逼'} />
                    <Button theme={theme} size={'large'} shape={'outline'} text={'大佬牛逼'} />
                </View>
                <Button theme={theme} size={'large'} shape={'outline'} text={'大佬牛逼'} />

                <Text theme={theme} text={'ghost:'} color={'primary'} />
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
                    <Button theme={theme} size={'small'} shape={'ghost'} text={'牛逼'} />
                    <Button theme={theme} size={'medium'} shape={'ghost'} text={'大佬牛逼'} />
                    <Button theme={theme} size={'large'} shape={'ghost'} text={'大佬牛逼'} />
                </View>
                <Button theme={theme} size={'large'} shape={'ghost'} text={'大佬牛逼'} />

            </ScrollView>
        );
    }
}

export default Main;
