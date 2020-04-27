import React, { Component } from 'react';
import { View, Toolbar, Touchable, Text } from '../../frameui';

class TouchablePage extends Component {
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

        <Touchable onPress={() => alert('touchable')}>
          <Text text={'touchable'} />
        </Touchable>
      </View>
    );
  }
}

export default TouchablePage;
