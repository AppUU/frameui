import React, { PureComponent } from 'react';
import { View, } from 'react-native';
import { Text } from '../frameui';

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
                <Text theme={theme} color={'color'} />
            </View>
        );
    }

    onPress = () => {
        const { setTheme } = this.props
        setTheme(require('./style/a.json'))
    }
}

export default Main;
