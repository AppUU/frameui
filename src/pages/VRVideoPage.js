import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { VRVideoPlayer } from 'react-native-vrplayer';

class VRVideoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <VRVideoPlayer
                    url={'http://allabc.jinshunkj.com/szsyj/in3.mp4'}
                    paused={false}
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}

export default VRVideoPage;
