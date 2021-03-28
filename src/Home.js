//import liraries
import React, {useState } from 'react';

import {StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Header  from './components/Header'

import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


import { v4 as uuidv4 } from 'uuid';


// create a component
const Home = () =>  {

    const [items, setItems] = useState([
        {id: 1, text:'Milk'},
        {id: 2, text:'Eggs'},
        {id: 3, text:'Spa'},
        {id: 4, text:'Car Wash'}
    ]);

    const [text, setText] = useState('');

    const onTextChange = (text) => {
        setText(text);
    }
    

    const deleteItem = (id) =>{
        setItems(prevItems =>{
            return prevItems.filter(item => item.id != id );
        });
    }

    const addItem = (item) =>{
        setItems(prevItems =>{
            return [{id:uuidv4(),text},...prevItems]
        })
  
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Shopping List'} />

            <AddItem addItem={addItem} onTextChange={onTextChange}/>

            <FlatList 
            data={items} 
            renderItem={({item}) =>(<ListItem item={item} deleteItem={deleteItem}/>
            )}  
            />

        </SafeAreaView>
    );

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'grey'

    },
    text: {
        color:'darkslateblue',
        fontSize:20
    },
    profileImg: {
        width:100,
        height:100,
        borderRadius:50

    }

});

//make this component available to the app
export default Home;
