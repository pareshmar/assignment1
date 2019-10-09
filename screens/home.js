import React from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'black',
          paddingTop: 20,
        }}>
        <Image
          source={require('../assets/logo2.png')}
          style={{ height: 50, width: 200, padding: 50 }}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/homeimg.jpg')}
          style={{ height: 300, width: 500 }}
          resizeMode="contain"
        />
        <Text style={{ color: 'white', padding: 20 }}>
          Abel Tesfaye, better known by his stage name The Weeknd, is a Canadian
          singer and songwriter. He won 3 Grammy Awards, 8 Billboard Music
          Awards, 9 Juno Awards, and has been nominated for one Academy Award.
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
