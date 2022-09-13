import React from 'react';
import {View, Text} from 'react-native';
import {Color} from './src/theme/color';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/Navigations/HomeStack';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
};
export default App;
