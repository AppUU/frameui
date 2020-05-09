import React, { Component } from 'react';
import { View, Toolbar, AnimatedView, Button } from '../../frameui';

class AnimatedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, navigator } = this.props
        return (
            <View>
                <Toolbar title={title} onPress={() => navigator.pop()} />

                <AnimatedView>
                    <Button title={'按钮'} />
                </AnimatedView>
            </View>
        );
    }
}

export default AnimatedPage;
