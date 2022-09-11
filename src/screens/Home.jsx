import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import {Color} from '../theme/color';
import Chat from './Chat'
// import Call from './Call';

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
        <Tab.Navigator>
          <Tab.Screen name='chat' component={Chat}/>
          {/* <Tab.Screen name="Chat" component={<View>
            <Text>SDISDIS</Text>
          </View>} /> */}
          {/* <Tab.Screen name="Call" component={Call} /> */}
        </Tab.Navigator>
      </View>
    </View>
  );
};
export default Home;
