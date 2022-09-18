import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Contact from '../components/Contact';
import {Contacts} from '../dummy_data';

const LandingPage = ({navigation}) => {
  const selectUser = index => {
    const selectedUser = Contacts.splice(index, 1);
    navigation.replace('Home', {
      selectedUser: selectedUser[0],
    });
  };
  return (
    <FlatList
      data={Contacts}
      renderItem={({index, item}) => (
        <TouchableOpacity activeOpacity={0.8} onPress={() => selectUser(index)}>
          <Contact title={item.name} subTitle="" />
        </TouchableOpacity>
      )}
    />
  );
};
export default LandingPage;
