//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        height:60,
        padding:15,
        backgroundColor: 'white',
    },
    text:{
        color:'#2980B9',
        fontSize:23,
        textAlign:'center',
    }
});

//make this component available to the app
export default Header;
