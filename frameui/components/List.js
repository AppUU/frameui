import React, { Fragment } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

const List = ({ children }) => (
    <ScrollView>
        <View style={styles.container}>
            {children}
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: { marginVertical: 4 }
});

export default List;
