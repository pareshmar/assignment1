import React from 'react';
import { Text, View } from 'react-native';

class XoScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{ color: 'white' }}>XO FAMILY Content</Text>
      </View>
    );
  }
}

export default XoScreen;
