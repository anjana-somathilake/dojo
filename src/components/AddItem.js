//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

// create a component
const AddItem = ({addItem,onTextChange}) => {
    return (
        <View style={styles.container}>
            <Input placeholder='Add item' onChangeText={onTextChange} /> 
            <Button title='Add' style={{margin:10}} onPress={()=>addItem('test')} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default AddItem;
