import React from 'react';
import {View, Text} from 'react-native';
import {Color} from './src/theme/color';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};
export default App;
