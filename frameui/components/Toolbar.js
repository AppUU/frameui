import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Layout, mScaleSize, _ANDROID_ } from '..';
// import { getInset } from 'react-native-safe-area-view';

const Toolbar = ({ theme, title }) => (
    <Layout theme={theme} color={'primary'} style={styles.container}>

    </Layout>
);
const styles = StyleSheet.create({
    container: {
        height: mScaleSize(40) 
    }
});
export default Toolbar;
