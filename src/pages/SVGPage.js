import React, { Component } from 'react';
import { View, Toolbar } from '../../frameui';
import Svg, { SvgXml } from 'react-native-svg';
import tzggSvg from '../svg/tzgg.svg';

class SVGPage extends Component {
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
        <SvgXml width={60} height={18} xml={tzggSvg} />
      </View>
    );
  }
}

export default SVGPage;
