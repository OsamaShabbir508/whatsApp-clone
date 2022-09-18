import React from 'react';
import {FlatList, ScrollView, Text, View, StyleSheet} from 'react-native';
import Chat from '../components/Chat';
import { Contacts } from '../dummy_data';

const ChatScreen = (props) => {
  const selectedUser= props.route.params;
  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        data={Contacts}
        renderItem={({index, item}) => (
          <Chat
            key={index}
            name={item.name}
            date={item.date}
            message={item.message}
            onPress={()=>props.navigation.navigate('Chatting',{
              name:item.name,
              item,
              selectedUser
            })}
          />
        )}
        ItemSeparatorComponent={
          <View style={styles.listSeparatorIndicator}></View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  listSeparatorIndicator: {
    height: 0.47,
    width: '70%',
    backgroundColor: 'gray',
    alignSelf: 'center',
  },
});
export default ChatScreen;
const chat_List = [
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Kamran',
    date: '15:70',
    message: 'Kaha ho? ..',
  },
  {
    name: 'Abrar',
    date: '12:20',
    message: 'M nh arha..',
  },
  {
    name: 'ahmed',
    date: '12:70',
    message: 'Nh arha..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Kamran',
    date: '15:70',
    message: 'Kaha ho? ..',
  },
  {
    name: 'Abrar',
    date: '12:20',
    message: 'M nh arha..',
  },
  {
    name: 'ahmed',
    date: '12:70',
    message: 'Nh arha..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
  {
    name: 'Hassan',
    date: '18:70',
    message: 'hello,Are u ..',
  },
];
