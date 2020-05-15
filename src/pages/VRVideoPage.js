import React, { Component } from 'react';
import { View, _ANDROID_ } from '../../frameui';
import { VRFilterType, VRVideoPlayer } from 'react-native-vrplayer';

class VRVideoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                {_ANDROID_ &&
                    <VRVideoPlayer
                        url={'http://allabc.jinshunkj.com/szsyj/in3.mp4'}
                        paused={false}
                        style={{ width: "100%", height: 250 }}
                    />}
            </View>
        );
    }
}

export default VRVideoPage;
