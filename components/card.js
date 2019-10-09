import React from 'react';
import {StyleSheet , Text, View, Image } from 'react-native';


const albums = {
  mdm : require('../assets/mydear.jpg'),
  starboy : require('../assets/starboy.jpg'),
  bbtm : require('../assets/beauty.jpg'),
  kiss : require('../assets/kissland.png'),
  trilogy : require('../assets/trilogy.jpg')
};



export default class MyCards extends React.Component {
  render () {
    return (
       
      <View style = {{justifyContent: 'center', alignItems: 'center'}}>
       
       <Image source = {albums[this.props.albums]} resizeMode="cover" style= { myStyles.card} />

      </View>

    );
  }

}

const myStyles = StyleSheet.create({
    card: {
      width: 300,
    }
})
