//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-elements';

// create a component
const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText} >{item.text}</Text>
                <Button title='Delete' onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    listItem: {
        padding: 15,
        backgroundColor: 'pink',
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    listItemText: {
        fontSize: 18,

    }

});

//make this component available to the app
export default ListItem;
