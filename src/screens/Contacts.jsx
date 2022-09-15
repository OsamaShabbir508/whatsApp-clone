import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Contact from '../components/Contact';
import Header from '../components/Header';

const Contacts = ({navigation}) => {
  return (
    <View >
      <Header screenName="contacts" data={{onBack: () => {navigation.goBack()}}} />
      <TouchableOpacity onPress={()=>navigation.navigate('Newgroup')}>
      <Contact 
    iconName= 'group'
    iconBackGroundColor='#00A36C'
    title='New group'
    subTitle= ''
  />
  </TouchableOpacity>
    <Contact 
    iconBackGroundColor='#00A36C'
    title='New contacts'
    subTitle= ''
  />

       <FlatList
          data={contact_List}
          renderItem={({item, index}) => <Contact{...item} />}
        />
    </View>
  );
};
export default Contacts;
const contact_List = [
  {
    iconBackGroundColor: '#00A36C',
    title: 'New Contact',
    subTitle: '',
  },
  {
    iconName: 'group',
    iconBackGroundColor: '#00A36C',
    title: 'New group',
    subTitle: '',
  },

  {
    title: 'Saad Ahmd',
  },
  {
    title: 'Huzaifa Coa',
  },
  {
    title: 'Hassan ahmed',
  },
  {
    title: 'Asif ahmed',
  },
  {
    title: 'Ather te',
  },
  {
    title: 'Shuja',
  },
  {
    title: 'Ahmed',
  },
  {
    title: 'Salman',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
  {
    title: 'Osama Ahmed',
  },
];
