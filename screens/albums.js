import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';


import Card from '../components/card';

class AlbumsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={style.sv}>
      
        <Text style ={{color:'white', padding:50, textAlign:'center', fontSize:20}}> ALBUMS BY THE
        <Text style={{color:'blue' , fontStyle: 'italic'}}>
         WEEKND
        </Text>
        </Text> 
        <Card albums="mdm"> </Card>

        
        <Card albums="starboy"> </Card>

         
        <Card albums="bbtm"> </Card>

        
        <Card albums="kiss"> </Card>

         
        <Card albums="trilogy"> </Card>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  sv: {
    backgroundColor: 'black',
    paddingTop:50,
    paddingBottom: 100,
    marginHorizontal: 1,
  },
   
});

export default AlbumsScreen;
