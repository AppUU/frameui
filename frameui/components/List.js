import React, { Fragment } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

//stickyHeaderIndices{[0]}置顶
const List = ({ children }) => (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            {children}
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: { marginVertical: 4 }
});

export default List;
