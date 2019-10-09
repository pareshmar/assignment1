
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';
import React, { Component } from 'react'; 
import { Image } from 'react-native';

import HomeScreen from './screens/home';
import XoScreen from './screens/xo';
import AlbumsScreen from './screens/albums';


 

// Tab Navigator
const HomeNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen, 
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: () => (
            <Image
              source={require('./assets/black.png')} style = {{height: 25, width : 25, alignItems: 'center'}                    } />
             ) }},

    Albums: { screen: AlbumsScreen, navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: () => (
            <Image
              source={require('./assets/album.png')} style = {{height: 25, width : 25, alignItems: 'center'}                    } />
             ) }},


    Xo : {screen: XoScreen, navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: () => (
            <Image
              source={require('./assets/xo.png')} style = {{height: 25, width : 25, alignItems: 'center'}                    } />
             ) }}
  },
  {
    initialRouteName: 'Home'
  },
  {
    tabBarOptions: {
       activeTintColor: '#fb9800',
       inactiveTintColor: '#7e7b7b',
       showLabel: true,
       labelStyle: {
        fontSize: 10,
       }
      }
  }
 
)

// app entry point
export default createAppContainer( 
  createStackNavigator(
    {
      App: HomeNavigator,
    
    },
    {
      
      transitionConfig: () => zoomIn(), // screen to screen transitions
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false, // remove top bar and make full screen
      },
      defaultNavigationOptions: { 
        gesturesEnabled: true, 
      }
    }
  )
);