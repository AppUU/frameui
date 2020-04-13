import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../frameui';

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
            <ScrollView >
                <Button theme={theme} size={'large'} text={'text'} onPress={this.onPress.bind(this, 'TextPage')} />

            </ScrollView>
        );
    }

    onPress = (component) => {
        const { navigator } = this.props
        navigator.push({ id: component })
    }
}

export default Main;
