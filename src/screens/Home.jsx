import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import {Color} from '../theme/color';
import Chat from './Chat';
import Call from './Call';
import Status from './Status';


const Tab = createMaterialTopTabNavigator();
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="WhatsApp" />
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: Color.white,
        }}>
        <Tab.Navigator
          screenOptions={{
            activeTinitColor:'red',
            tabBarIndicatorStyle:{
              backgroundColor:Color.white
            },
            tabBarLabelStyle: {
              fontSize: 13,
              color: Color.white,
              fontWeight: 'bold'
            },
            tabBarStyle: {backgroundColor: Color.green},
          }}>
          <Tab.Screen name="chats" component={Chat} />
          <Tab.Screen name="Status" component={Status} />
          <Tab.Screen name="Calls" component={Call} />
        </Tab.Navigator>
      </View>
    </View>
  );
};
export default Home;
