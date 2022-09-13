import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';

const Chatting = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <Header
        screenName="chat"
        data={{
          onBack: goBack,
          popUpMenuItems:popUpItems
        }}
      />
      <Text>CHatting</Text>
    </View>
  );
};
const popUpItems = [
  {
    item: 'View contacts',
    onTap: () => alert('View contacts')
  },
  {
    item: 'Search',
    onTap: () => alert('Search'),
  },
  {
    item: 'Disappearng message',
    onTap: () => alert('Disappearng message'),
  },
  {
    item: 'Wallpaper',
    onTap: () => alert('Wallpaper'),
  },
];
export default Chatting;
