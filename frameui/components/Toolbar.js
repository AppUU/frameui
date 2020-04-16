import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, mScaleSize, _ANDROID_, getStatusBarHeight } from '..';

class Toolbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            statusBarHeight: 0
        };
    }

    UNSAFE_componentWillMount() {
        getStatusBarHeight().then(result => this.setState({ statusBarHeight: result.height }));
    }

    render() {
        const { theme } = this.props
        const { statusBarHeight } = this.state
        return (
            <Layout theme={theme} color={'primary'}
                style={[styles.container, {
                    height: mScaleSize(40) + statusBarHeight

                }]}>

            </Layout>
        );
    }
}


const styles = StyleSheet.create({
    container: {
    }
});
export default Toolbar;
