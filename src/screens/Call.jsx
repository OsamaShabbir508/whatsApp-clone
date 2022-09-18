import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Call = () => {
  console.log('call screen rendered');
  const isf = useIsFocused();
  useEffect(() => {
    console.log('use eff from call');
  }, []);
  console.log(isf, 'from call');
  return (
    <View>
      <Text>chat</Text>
    </View>
  );
};

export default Call;
