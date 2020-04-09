import React, { PureComponent } from 'react';
import { View, } from 'react-native';
import { Text, Button } from '../frameui';

class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        console.log(this.context);
    }
    render() {
        const { theme } = this.props
        return (
            <View>
                <Text text={'normal'} theme={theme} size={'S'} />
                <Text text={'primary'} theme={theme} color={'primary'} size={'L'} />
                <Text text={'success'} theme={theme} color={'success'} size={'M'} />
                <Text text={'danger'} theme={theme} color={'danger'} size={'M'} />
                <Text text={'info'} theme={theme} color={'info'} size={'M'} />
                <Button theme={theme} bgColor={'primary'} />
                <Button theme={theme} bgColor={'success'} />
                <Button theme={theme} bgColor={'danger'} />
                <Button theme={theme} bgColor={'info'} />
            </View>
        );
    }

    onPress = () => {
        const { setTheme } = this.props
        setTheme(require('./style/a.json'))
    }
}

export default Main;
