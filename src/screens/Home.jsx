import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import {Color} from '../theme/color';
import ChatScreen from './Chats';
import Call from './Call';
import Status from './Status';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();
const activeFloatingIcon = {
  Chats: 'chat',
  Status: 'photo-camera',
  Calls: 'add-call',
};
const Home = () => {
  console.log('Home screen rendered');
  const [activeTab, setActiveTab] = useState('Chats');
 return (
    <View style={{flex: 1}}>
      <Header title="WhatsApp" />
      <View style={styles.topTabBarContainer}>
        <Tab.Navigator screenOptions={styles.screenOptions} initialRouteName='chats'>
          <Tab.Screen options={{
            tabBarShowIcon:true,
            tabBarShowLabel:false,
            tabBarIcon:({focus})=>{return <Icon name='photo-camera' size={22} color={'white'}/>}
          }} name='cam' component={ChatScreen} />
          <Tab.Screen
            listeners={{
              focus: () => {
                setActiveTab('Chats');
              },
            }}
            name="chats"
            component={ChatScreen}
          />
          <Tab.Screen
            listeners={{
              focus: () => {
                setActiveTab('Status');
              },
            }}
            name="Status"
            component={Status}
          />
          <Tab.Screen
            listeners={{
              focus: () => {
                setActiveTab('Calls');
              },
            }}
            name="Calls"
            component={Call}
          />
        </Tab.Navigator>
        <TouchableOpacity  activeOpacity={.6} style={styles.floatingContainer}>
         
          <Icon
            name={activeFloatingIcon[activeTab]}
            size={25}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  topTabBarContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
  },
  screenOptions: {
    activeTinitColor: 'red',
    tabBarIndicatorStyle: {
      backgroundColor: Color.white,
    },
    tabBarLabelStyle: {
      fontSize: 13,
      color: Color.white,
      fontWeight: 'bold',
    },
    tabBarStyle: {backgroundColor: Color.green},
  },
  floatingContainer:{
    bottom: 30,
    right: 25,
    backgroundColor: Color.green,
    padding: '4%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation:10
  }
});
